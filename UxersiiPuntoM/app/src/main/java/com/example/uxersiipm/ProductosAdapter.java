package com.example.uxersiipm;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import java.util.List;

public class ProductosAdapter extends BaseAdapter {

    private Context context;
    private List<Productos> productos;
    private LayoutInflater inflater;

    public ProductosAdapter(Context context, List<Productos> productos) {
        this.context = context;
        this.productos = productos;
        this.inflater = LayoutInflater.from(context);
    }

    @Override
    public int getCount() {
        return productos.size();
    }

    @Override
    public Object getItem(int position) {
        return productos.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
       ViewHolder holder;
       if (convertView==null){
           convertView=inflater.inflate(R.layout.listaformato, parent, false);
           holder=new ViewHolder();
           holder.nombTxt=convertView.findViewById(R.id.nombreL);
           holder.presTxt=convertView.findViewById(R.id.precioL);
           holder.cantTxt=convertView.findViewById(R.id.cantidadL);
           holder.fechTxt=convertView.findViewById(R.id.fechaCadL);
           holder.imgVis=convertView.findViewById(R.id.imagencitaList);
           convertView.setTag(holder);
       }else{
           holder=(ViewHolder) convertView.getTag();
       }
       Productos produc= productos.get(position);
       holder.nombTxt.setText(produc.getNomAlim());
       holder.presTxt.setText(produc.getPrecio());
       holder.cantTxt.setText(produc.getCantidad());
       holder.fechTxt.setText(produc.getFechaCad());
       Picasso.get().load(produc.getUrlimg()).into(holder.imgVis);
       return convertView;
    }

    static class ViewHolder {
        TextView nombTxt;
        TextView presTxt;
        TextView cantTxt;
        TextView fechTxt;
        ImageView imgVis;
    }
}
