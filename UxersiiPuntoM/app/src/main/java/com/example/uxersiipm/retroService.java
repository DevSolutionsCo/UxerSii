package com.example.uxersiipm;

import java.util.List;

import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.Multipart;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Part;
import retrofit2.http.Path;

public interface retroService {
    @GET("api/v1/alimentos/{id_punto}/")
    Call<List<Productos>> obtenerProductos(@Path("id_punto")int idPunto);
    @Multipart
    @POST("api/v1/alimentosp/")
    Call<Productos> crearProducto(
            @Part("nomAlim") RequestBody nomAlim,
            @Part("cantidad") RequestBody cantidad,
            @Part("precio") RequestBody precio,
            @Part("fechaCad") RequestBody fechaCad,
            @Part MultipartBody.Part imagen
    );
    @PUT("api/v1/alimentosE")
    Call<Void> actualizarProducto(@Path("id") int id, @Body Productos producto);
    @DELETE("api/v1/alimentosD")
    Call<Void> eliminarProducto(@Path("id") int id);
}
