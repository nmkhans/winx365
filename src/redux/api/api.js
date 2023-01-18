import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    tagTypes: ["agents"],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: `/login-user`,
                method: "POST",
                body: data
            })
        }),
        getAgents: builder.query({
            query: ({ role, pageno, perpage }) => ({
                url: `/get-agents?role=${role}&pageno=${pageno}&perpage=${perpage}`,
                method: "GET"
            })
        })
    })
})

export const {
    useLoginUserMutation,
    useGetAgentsQuery,
} = api;