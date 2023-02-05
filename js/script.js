$(document).ready(function(){
	$('.menu-item').hover(function(){ 
    console.log($(this))
    $(this).children().next().toggle();
    });


    
    // $('#symbol-data-table-id').DataTable( {
    //     dom: 'Bfrtip',
    //     buttons: [
    //         {
    //             extend: 'colvis',
    //             collectionLayout: 'fixed columns',
    //             collectionTitle: 'Column visibility control'
    //         }
    //     ]
    // } );

});