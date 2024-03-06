package com.example.uxersiipm;

import android.graphics.Bitmap;
import android.net.Uri;

public interface resCaptura {
    void onImageCaptured(Bitmap imageBitmap);
    void onImageSelected(Uri imageUri);
}
