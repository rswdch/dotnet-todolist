function deleteTodo(i){
    $.ajax({
        url: 'Home/Delete',
        type: 'POST',
        data: {
            id: i
        },
        success: () => {
            window.location.reload();
        }
    });
}

function populateForm(i){
    $.ajax({
        url: 'Home/PopulateForm',
        type: 'GET',
        data: {
            id: i
        },
        dataType: 'json',
        success: (response) => {
            $("#Todo_Name").val(response.name);
            $("#Todo_Id").val(response.id); 
            $("#form-button").val("Update Todo");
            $("#form-action").attr("action","/Home/Update")
        }
        
    })
}