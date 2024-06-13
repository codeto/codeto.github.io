// WARN: FCM in worker and in-app must be on the same version
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
  messagingSenderId: '96068949844',
  apiKey: 'AIzaSyDtWI2N0p5_15M648EV3LwPcXfz5_W3IDI',
  projectId: 'cyhome-cyfeer',
  appId: '1:96068949844:web:57d54beb5a5a7a087edac1',
};

const initFirebase = firebase.initializeApp(firebaseConfig);

const messaging = initFirebase.messaging();

const NOTICES = (notifyData) => {
  const { unitGroupId, destId, unitId, url, extraData = {} } = notifyData;
  const extraDataObj = typeof extraData === 'string' ? JSON.parse(extraData) : { ...extraData };
  const { code, status } = extraDataObj;
  const queryObj = {
    limit: PAGINATION_LIMIT,
    page: DEFAULT_CURRENT_PAGE,
  };
  if (status) queryObj.status = status;
  if (code) queryObj.code = code;
  const queryData = `?${new URLSearchParams(queryObj).toString()}`;
  return {
    MSG_NOTICE: `/buildings/${unitGroupId}/resident-communicate`,
    HELPDESK_NOTICE: `/buildings/${unitGroupId}/help-desk`,
    BOOKING_NOTICE: `/buildings/${unitGroupId}/amenities-orders${destId ? `/${destId}` : ''}`,
    VISITOR_NOTICE: `/buildings/${unitGroupId}/access-management${queryData}`,
    ELEVATOR_RESERVATION_NOTICE: `/buildings/${unitGroupId}/inventory-transfer-management${queryData}`,
    CONSTRUCTION_REGISTRATION_NOTICE: `/buildings/${unitGroupId}/construction-management${queryData}`,
    PAYMENT_NOTICE: `/buildings/${unitGroupId}/statistics/receipt${destId ? `?receiptId=${destId}` : ''}`,
    WALLET_NOTICE: `/buildings/${unitGroupId}/statistics/apartment-account${unitId ? `?unitId=${unitId}` : ''}`,
    REQUEST_NOTICE: `/buildings/${unitGroupId}/task${destId ? `/${destId}` : ''}`,
    SYNC_FEE_NOTICE_TO_FAST: `/buildings/${unitGroupId}/integrate-accounting`,
    SYNC_RECEIPT_TO_FAST: `/buildings/${unitGroupId}/integrate-accounting`,
    AMENITY_BOOKING_NOTICE: `/buildings/${unitGroupId}/amenities-orders${destId ? `/${destId}` : ''}`,
    UTILITY_BOOKING_NOTICE: `/buildings/${unitGroupId}/amenities-orders${destId ? `/${destId}` : ''}`,
    RECEIVE_PACKAGE_NOTICE: `/buildings/${unitGroupId}/receive-package-management`,
    WEBVIEW_NOTICE: url || '',
    MODULE_NOTICE: '',
  };
};

let notifyData;

messaging.onBackgroundMessage(function (payload) {
  const { notification: notificationData, data } = payload;
  notifyData = data;
  const title = notificationData.title || data.title || '';
  const body = notificationData.body || data.body || '';
  const notificationTitle = title;
  const notificationOptions = {
    body,
    icon: '/assets/images/favicon.ico',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
  if (notifyData && notifyData.unitGroupId) {
    const url = NOTICES(notifyData)[notifyData?.type] ? NOTICES(notifyData)[notifyData?.type] : '';
    const urlToOpen = new URL(url, self.location.origin).href;
    if (urlToOpen) {
      const promiseChain = clients
        .matchAll({
          type: 'window',
          includeUncontrolled: true,
        })
        .then((windowClients) => {
          let matchingClient = null;

          for (let i = 0; i < windowClients.length; i++) {
            const windowClient = windowClients[i];
            if (windowClient.url === urlToOpen) {
              matchingClient = windowClient;
              break;
            }
          }

          if (matchingClient) {
            return matchingClient.focus();
          }
          return clients.openWindow(urlToOpen);
        });

      event.waitUntil(promiseChain);
    }
  }
});
