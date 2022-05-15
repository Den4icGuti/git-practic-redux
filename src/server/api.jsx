import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Cars"],
  endpoints: (build) => ({
    //=== Получаем данные с БД===//
    getCars: build.query({
      query: () => "/cars",
      providesTags: ["Cars"],
    }),
    //===Метод добавления в БД ===//
    addCar: build.mutation({
      query: (newCar) => ({
        url: "/cars",
        method: "POST",
        body: newCar,
      }),
      invalidatesTags: ["Cars"],
    }),
    //===Метод Удаления===//
    deleteCar: build.mutation({
      query: (id) => ({
        url: `/cars/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cars"],
    }),
  }),
});

export const { useGetCarsQuery, useAddCarMutation, useDeleteCarMutation } =
  carsApi;
