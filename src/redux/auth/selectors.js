export const selectUserData = (state) => state.auth.user;
// export const selectToken = (state) => state.auth.token;
export const selectIsSignedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
