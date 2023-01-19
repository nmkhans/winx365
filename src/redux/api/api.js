import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://backend.winx365.online/api/v1" }),
    tagTypes: ["agent"],
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: `/login-user`,
                method: "POST",
                body: data
            })
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/register-user",
                method: "POST",
                body: data
            }),
        }),
        getAgents: builder.query({
            query: ({ role, pageno, perpage }) => ({
                url: `/get-agents?role=${role}&pageno=${pageno}&perpage=${perpage}`,
                method: "GET"
            }),
            providesTags: ["agent"]
        }),
        addAgent: builder.mutation({
            query: (data) => ({
                url: "/add-agent",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["agent"]
        }),
        deleteAgent: builder.mutation({
            query: (id) => ({
                url: `/delete-agent/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["agent"]
        })
    })
})

export const {
    useLoginUserMutation,
    useRegisterUserMutation,
    useGetAgentsQuery,
    useAddAgentMutation,
    useDeleteAgentMutation,
} = api;