import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query";

const { REACT_APP_BASE_URL } = process.env;

export const API = createApi({
	reducerPath: "authQuery",
	baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_BASE_URL }),
	endpoints: (builder) => ({
		loadUser: builder.query({
			query: () => `/auth`,
		}),
	}),
});

export const { useLoadUserQuery } = API;
