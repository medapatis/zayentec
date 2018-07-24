(function(){
    var $g_examples = document.querySelector('#examplesList');

    function init(){
       
    }

    

    function showExamples(event){
        event = event || window.event;

        event.stopPropagation();
        event.preventDefault();


        if(!$g_examples.isVisible){
            $g_examples.style.display = 'block';
            $g_examples.isVisible = true;
        }else{
            $g_examples.style.display = 'none';
            $g_examples.isVisible = false;
        }
    }

    function hideExamples(){
         $g_examples.style.display = 'none';
    }

    init();
})();