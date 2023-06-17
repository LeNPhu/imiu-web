import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "./services/authApi.js";
import authSlice from "./authSlice.js";
import { questionApi } from "./services/questionApi.js";

import { paymentApi } from "./services/paymentApi.js";
import { subscriptionApi } from "./services/subscriptionApi.js";
import { customerAnswerApi } from "./services/customerAnswerApi.js";
import { menuApi } from "./services/menuApi.js";
import { accountApi } from "./services/accountApi.js";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [questionApi.reducerPath]: questionApi.reducer,
    [customerAnswerApi.reducerPath]: customerAnswerApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      questionApi.middleware,
      customerAnswerApi.middleware,
      paymentApi.middleware,
      subscriptionApi.middleware,
      menuApi.middleware,
      accountApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
