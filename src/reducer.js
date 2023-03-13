export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //   TODO: remove this after development
  // token:
  //   "BQC8jPzGAsaTJ6SS1ta1R5lsvB6SZUr63bCOAaUuALWpIwPnQB28SKQR8Vmw9nVx_wZZQh3z1Hfz3Xy6jZ-_T0oirxpPbCAluJhD3o9cgsnLanOQUK7NzRso7q3IjishScaXZIT_p908FGKVMAQysCepyPxgaJSdXYFh-pPU-AG0Q3-_LZzwMm-8T-vNuUlsrbSQ5StnMe4bONgY75Qurg",
};

const reducer = (state, action) => {
  switch (action.type) {
    case `SET_USER`:
      return {
        ...state,
        user: action.user,
      };

    case `SET_TOKEN`:
      return {
        ...state,
        token: action.token,
      };

    case `SET_PLAYLISTS`:
      return {
        ...state,
        playlists: action.playlists,
      };

    case `SET_DISCOVER_WEEKLY`:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case `SET_ITEM`:
      return {
        ...state,
        item: action.item,
      };

    case `SET_PLAYING`:
      return {
        ...state,
        playing: action.playing,
      };

    case `SET_SPOTIFY`:
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
