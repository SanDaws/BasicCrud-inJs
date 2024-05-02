#lugar de almacenamiento de datos del inventario
listaDeCompra={'pan':[2,'bimbo'],'queso':[5,'colanta']}
#formato: {'nombre':[unidades,precio],...}
def MenuInicial():
    print("""
          \t\tLista de compra semanal:
          Escribe una de las siguientes opciones
          1: Agregar un nuevo producto
          2: eliminar un producto
          3: actualizar informacion de un producto
          4: buscar  un producto
          5: imprimir todo el inventario
          S: salir""")
    decision=input("Opcion a la que se dirije: ").upper()
    if decision == '1':#Agregar un nuevo producto
      agregarProduct()
    elif decision == '2':#eliminar un producto
      EliminarProducto()
    elif decision == '3':#actualizar informacion de un producto
      ActualizarProducto()
    elif decision == '4':#buscar un producto
      BuscarProducto()
    elif decision == '5':#imprimir toda la lista de compra
      ImprimirInventario()
    elif decision=='S':#salir
      quit()
    else:
      print("Opcion no valida")
      MenuInicial()
######################################################################
#utilidades

#volver la menu
def volverAMenu():
  #vuelve alla funcion menu inicial
  print("""volviendo al menu principal
        --------------------------
        """)
  MenuInicial()
  
#revisar si pertenece a la lista de compra
def RevisarEnListaDeCompra(nombreProducto:str):
  #revisa si un numero pertenece a la lista de compra:
    if nombreProducto.casefold() in listaDeCompra:#revision si el producto ya existe
      return 1
    else:#retorna 0 si no existe
      return 0

#retorno a menu incial o devuelve un elemento
def IngresoNombreProducto():
  #busqueda del producto retorna el mismo nombre para almacenarlo
  #permite tambien regresar a la funcion menu inicio al escribir r o R
  nombreProducto=input("Nombre del producto: ")#ingreso del primer prompt
  if nombreProducto=='R' or nombreProducto=='r':#instruccion para volver
    volverAMenu()
  else:
    return nombreProducto
#formato de impresion elementos dentro del diccionario
def formatoImpresionElemento(item:str,unidades,precio):
  #retorna un formato estructurado de impresion de un producto
  formatoImpresion="""{}\t{}\t\t{}""".format(item.capitalize(),unidades,precio)
  return formatoImpresion
  
########################################################################3
#agregar productos
def agregarProduct():
  #permite agregar un producto nuevo
  print("""ingresar producto:  para volver al menu escriba R
        una vez iniciado el proceso debe completarlo""")
  nombreProducto=IngresoNombreProducto()# ingreso nombre generico
  if RevisarEnListaDeCompra(nombreProducto)==1:#condicion para revisar que exista
    print("producto Existente")
    agregarProduct()# vuelve a niniciar la funcion
  unidades=int(input("Unidades del producto: "))
  Nota=input("Nota: ")
  listaDeCompra[nombreProducto]=[unidades,Nota]#nuevo elemento
  print("Producto ingresado exitosa mente")
  agregarProduct()

######################################################################
#Eliminar producto
def EliminarProducto():
    print("""Eliminacionde producto:  para volver al menu escriba R
    una vez iniciado el proceso debe completarlo""")
    nombreProducto=IngresoNombreProducto()
    if RevisarEnListaDeCompra(nombreProducto)==0:
        print("Producto no anotado")
        EliminarProducto()#reinica la funcion
    listaDeCompra.pop(nombreProducto)
    print('Producto eliminado Satisfactoriamente')#mensaje de comfirmacion para el usuario
    EliminarProducto()#reinica la funcion

##############################################################################
#actualizar producto
def ActualizarProducto():
    print("""Actualizacion de producto:  para volver al menu escriba R
    una vez iniciado el proceso debe completarlo""")
    nombreProducto=IngresoNombreProducto()
    if RevisarEnListaDeCompra(nombreProducto)==0:
        print('producto No Encotnrado')
        ActualizarProducto()#producto no encontrado busca otro producto
    print('escriba "=" en la casilla si algo permanece igual')
    unidades=input("Unidades del producto: ")
    unidades=listaDeCompra[nombreProducto][0] if unidades== '=' else int(unidades)# ayuda para hacer mas rapido el inventario en caso que algo permanezca igual
    nota=input("Nota Nueva: ")
    nota=listaDeCompra[nombreProducto][1] if nota== '=' else nota# ayuda para hacer mas rapido el inventario en caso que precio permanezca igual
    listaDeCompra[nombreProducto]=[unidades,nota]
    print('Actualizacion exitosa')
    ActualizarProducto()

#############################################################################
#buscar
#estableco la busqueda por el nombre y por la nota
#ya que podria existir mismas cantidades de productos generando una lista en la cual seria dificl buscar para el usuario
def BuscarProducto():
  print("""Busqueda de producto:  para volver al menu escriba R
una vez iniciado el proceso debe completarlo""")
  print("""Buscar producto por:
        1:Nombre
        2:Nota""")
  decision=input('decision: ')
  if decision=='1':nombreProducto=busquedaPorNombre()
  elif decision== '2':nombreProducto=BusquedaPorNota()
  elif decision== 'r'or decision=='R':volverAMenu() #ya que esto es una decion
  
  print("Nombre\tunidades\tNota:")
  print(formatoImpresionElemento(nombreProducto,listaDeCompra[nombreProducto][0],listaDeCompra[nombreProducto][1]),'\n')#impresion en base a fromatos
  BuscarProducto()

def busquedaPorNombre():
  nombreProducto=IngresoNombreProducto()
  if RevisarEnListaDeCompra(nombreProducto)==0:
    print("producto no encotrnado")#mensaje de no encontrado
    BuscarProducto()
  else:
    return nombreProducto
def BusquedaPorNota():
  #busca en base a la nota
  #suponiendo que la nota sera diferente
  notaProducto=input('nota: ')
  if notaProducto== 'r'or notaProducto=='R':volverAMenu()
  for item in listaDeCompra:#recorre la lista de compra 
    if listaDeCompra[item][1]==notaProducto:#si un elemento es igual a la nota propuesta
      return item#devuelve string con bombre del item
#Se puede buscar una forma mas optima de busqueda

###############################################################################
#imprimir
def ImprimirInventario():
  print("Nombre\tunidades\tNota:")
  for item in listaDeCompra:
    print(formatoImpresionElemento(item,listaDeCompra[item][0],listaDeCompra[item][1]))#impresion bajo formato
  print(' para volver al menu escriba R')
  IngresoNombreProducto()

#main
MenuInicial()