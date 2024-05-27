$.validator.addMethod("terminaPor", function(value, element, parametro){
    if(value.endsWith(parametro)){
        return true;
    }
    return false;
},"Debe terminar por {0}");

$("#formulario_registro").validate({
    rules: {
        nombre:{
            required:true,
            minlength:3,
            maxlength:30
        },
        apellido:{
            required:true,
            minlength:3,
            maxlength:30
        },
        correo:{
            required:true,
            email:true,
            terminaPor:"duoc.cl"
        },
        contraseña:{
            required:true,
            minlength:8,
            maxlength:30
        },
        texto:{
            required:true,
            minlength:5,
            maxlength:100
        }
    },
    errorPlacement: function(error, element) {
        
        error.insertAfter(element);
    },
    success: function(label) {
        
        label.addClass("valid").text("Perfecto!");
    }
});

$("#registrar").click(function(){
    if($("#formulario_registro").valid() == false){
        return;
    }
    $(".valid").hide();
    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let correo = $("#correo").val();
    let contraseña = $("#contraseña").val();
    let texto = $("#exampleFormControlTextarea1").val();
});