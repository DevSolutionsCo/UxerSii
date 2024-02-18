package com.example.uxersiipm;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface retroService {
    @GET("api/v1/alimentos/<int: id_punto>/")
    Call<List<Productos>> obtenerProductos();
    @POST("api/v1/alimentosp/")
    Call<Productos> crearProducto(@Body Productos producto);
    @PUT("api/v1/alimentosE")
    Call<Void> actualizarProducto(@Path("id") int id, @Body Productos producto);
    @DELETE("api/v1/alimentosD")
    Call<Void> eliminarProducto(@Path("id") int id);
}
