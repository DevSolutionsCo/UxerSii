package com.example.uxersiipm;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class retroClient {
    private static Retrofit retrofit;
    private static final String bdUrl = "https://781hhnms-8000.usw3.devtunnels.ms/uxersiiPruebas/";

    public static Retrofit getRetrofitInstance (){
        if (retrofit == null){
            retrofit = new Retrofit.Builder()
                    .baseUrl(bdUrl)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        return retrofit;
    }
}
