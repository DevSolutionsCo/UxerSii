# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Administrador(models.Model):
    id_admin = models.IntegerField(primary_key=True)
    correo_admin = models.CharField(max_length=50, db_collation='utf8mb3_general_ci', blank=True, null=True)
    contra_admin = models.CharField(max_length=20, db_collation='utf8mb3_general_ci', blank=True, null=True)
    nombre_admin = models.CharField(max_length=30, db_collation='utf8mb3_general_ci', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'administrador'

    def __str__(self) -> str:
        return self.nombre_admin # type: ignore




class Alimentos(models.Model):
    id_alim = models.AutoField(primary_key=True)
    nomb_alim = models.CharField(max_length=100, db_collation='utf8mb3_general_ci', blank=True, null=True)
    fecha_cad = models.DateField(blank=True, null=True)
    cantidad = models.IntegerField(blank=True, null=True)
    id_punto = models.IntegerField(blank=True, null=True)
    costo = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    imagen = models.CharField(max_length=500, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'alimentos'

    def __str__(self) -> str:
        return self.nomb_alim # type: ignore


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)



class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'

class PuntosColecta(models.Model):
    id_punto = models.AutoField(primary_key=True)
    nomb_punto = models.CharField(max_length=255, db_collation='utf8mb3_general_ci', blank=True, null=True)
    latitud = models.DecimalField(max_digits=10, decimal_places=6, blank=True, null=True)
    longitud = models.DecimalField(max_digits=10, decimal_places=6, blank=True, null=True)
    responsable = models.CharField(max_length=255, db_collation='utf8mb3_general_ci', blank=True, null=True)
    almacenamiento = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    horario = models.TimeField(blank=True, null=True)
    fecha_de_creacion = models.DateField(blank=True, null=True)
    estado = models.CharField(max_length=10, db_collation='utf8mb3_general_ci', blank=True, null=True)
    descripcion = models.TextField(blank=True, null=True)
    valcod = models.CharField(max_length=10, db_collation='utf8mb3_general_ci', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'puntos_colecta'
    
    def __str__(self) -> str:
        return self.nomb_punto # type: ignore


class Donaciones(models.Model):
    id_dona = models.CharField(primary_key=True, max_length=100)
    catn_adon = models.IntegerField(blank=True, null=True)
    nomb_alim_dona = models.CharField(max_length=100, db_collation='utf8mb3_general_ci', blank=True, null=True)
    fecha_cad_dona = models.DateField(db_column='fecha_cad_dona', blank=True, null=True)  # Field name made lowercase.
    estatus = models.CharField(db_column='estatus', max_length=15, db_collation='utf8mb3_general_ci', blank=True, null=True)  # Field name made lowercase.
    id_punto = models.IntegerField(blank=True, null=True)
    nombUserH = models.CharField(db_column='nombUserH', max_length=15, db_collation='utf8mb3_general_ci', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'donaciones'

    def __str__(self) -> str:
        return self.id_dona # type: ignore




class Mensajes(models.Model):
    id_mens = models.AutoField(primary_key=True)
    mensaje = models.TextField(blank=True, null=True)
    hora_men = models.DateTimeField(blank=True, null=True)
    usuario_envia = models.CharField(max_length=50, db_collation='utf8mb3_general_ci', blank=True, null=True)
    tipo_usuario = models.CharField(max_length=20, db_collation='utf8mb3_general_ci', blank=True, null=True)
    id_hog = models.ForeignKey('UsuarioHogar', models.DO_NOTHING, db_column='id_hog', blank=True, null=True)
    id_admin = models.ForeignKey(Administrador, models.DO_NOTHING, db_column='id_admin', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'mensajes'



class UsuarioHogar(models.Model):
    id_hog = models.AutoField(primary_key=True)
    nombre_hog = models.CharField(max_length=20, db_collation='utf8mb3_general_ci', blank=True, null=True)
    apellido_mat = models.CharField(max_length=20, db_collation='utf8mb3_general_ci', blank=True, null=True)
    apellido_pat = models.CharField(max_length=20, db_collation='utf8mb3_general_ci', blank=True, null=True)
    fecha_nac = models.DateField(blank=True, null=True)
    correo_hog = models.CharField(max_length=50, db_collation='utf8mb3_general_ci', blank=True, null=True)
    contra_hog = models.CharField(max_length=25, db_collation='utf8mb3_general_ci', blank=True, null=True)
    desc_hog = models.CharField(max_length=100, db_collation='utf8mb3_general_ci', blank=True, null=True)
    genero = models.CharField(max_length=20, db_collation='utf8mb3_general_ci', blank=True, null=True)
    nombUserH = models.CharField(db_column='nombUserH', max_length=15, db_collation='utf8mb3_general_ci', blank=True, null=True)  # Field name made lowercase.
    codigopostal = models.IntegerField(db_column='codigoPostal', blank=True, null=True)  # Field name made lowercase.
    fotoh = models.TextField(db_column='fotoH', blank=True, null=True)  # Field name made lowercase.
    numDonaciones = models.IntegerField(db_column='numDonaciones', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'usuario_hogar'

    def __str__(self) -> str:
        return self.id_hog # type: ignore


class AdministradorHog(models.Model):
    id_hog = models.ForeignKey('UsuarioHogar', models.DO_NOTHING, db_column='id_hog', blank=True, null=True)
    id_admin = models.ForeignKey(Administrador, models.DO_NOTHING, db_column='id_admin', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'administrador_hog'

class HogarAlim(models.Model):
    id_hog = models.ForeignKey('UsuarioHogar', models.DO_NOTHING, db_column='id_hog', blank=True, null=True)
    id_alim = models.ForeignKey(Alimentos, models.DO_NOTHING, db_column='id_alim', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'hogar_alim'




class CompraHog(models.Model):
    id_compra = models.AutoField(primary_key=True)
    folio = models.CharField(max_length=50)
    id_carrito = models.ForeignKey('Carrito', models.DO_NOTHING, db_column='id_carrito', blank=True, null=True)
    estatus = models.BooleanField()
    cantidad = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'compra_hog'


class Carrito(models.Model):
    id_carrito = models.AutoField(primary_key=True)
    id_hog = models.IntegerField(blank=True, null=True)
    id_alim = models.IntegerField(blank=True, null=True)
    estatus = models.CharField(db_column='estatus', max_length=20, db_collation='utf8mb3_general_ci', blank=True, null=True)  # Field name made lowercase.


    class Meta:
        managed = True
        db_table = 'carrito'

    



class userSiitoBack(models.Model):
    titulo = models.CharField(max_length = 200)
    descripcion = models.TextField(blank = True)
    done = models.BooleanField(default = False)

    def __str__(self) -> str:
        return self.titulo
    
