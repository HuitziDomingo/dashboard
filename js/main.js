document.addEventListener('DOMContentLoaded',function(){
    {
        class Raychel {
            
            constructor(){
                //Definicion de propiedades y metodos globales
            }

            static statesChange(args){
                args.button = document.querySelector(args.button) 
                args.cont = document.querySelector(args.cont) 
                args.button.addEventListener('click', () => { 
                    if( args.cont.getAttribute('data-state') == 'reveal' ){
                        args.cont.setAttribute('data-state','hidden')
                            if( args.close ) args.close()
                    }else{
                        args.cont.setAttribute('data-state','reveal')
                            if( args.open ) args.open()
                    }
                })
            }
            static changeColor(args){
                args.buttonColor = document.querySelectorAll(args.buttonColor)
                args.first = document.querySelectorAll(args.first)
                args.second = document.querySelectorAll(args.second)
                args.buttonColor.forEach( (elements) => {
                    elements.addEventListener( 'click', () => {
                        //Obtener Propiedad CSS
                        let n = window.getComputedStyle(elements)
                        let backgroundImg = n.getPropertyValue('background-image')

                        if( args.first )
                        args.first.forEach((i) => i.style.background = backgroundImg)
                    
                        if( args.second )
                        args.second.forEach((i) => i.style.background = backgroundImg)
                    })
                })
            }
        }
        //Colores del Menu
        Raychel.changeColor({
            first: '.navigation',
            second:'.navigation li',
            buttonColor: '.colorform',
        })
        //Colores Bars
        Raychel.changeColor({
            first: '.header-board',
            second:'.header',
            buttonColor: '.C__colorform',
        })

        //Abrir y cerrar panel de colores
        var b = document.querySelector('#__button_colorsfull')
        Raychel.statesChange({
            button: '#__button_colorsfull',
            cont: '#__cont__colorsfull',
            open: () => {
                b.setAttribute('data-state','move')
            },
            close: () => {
                setTimeout(() =>{b.removeAttribute('data-state','move')},100)
            },
        })


        //Carga de Graficas
        // Load the Visualization API and the corechart package.
        google.charts.load('current', { 'packages': ['corechart'] });

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows([
                ['Mushrooms', 3],
                ['Onions', 1],
                ['Olives', 1],
                ['Zucchini', 1],
                ['Pepperoni', 2]
            ]);

            // Set chart options
            var options = {
                'title': 'Cuanto cuesta la pizza que comi anoche',
                'width': 400,
                'height': 300
            };

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);

            //Segunda Grafica
            google.charts.load('current', { 'packages': ['annotationchart'] });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {
                var data = new google.visualization.DataTable();
                data.addColumn('date', 'Date');
                data.addColumn('number', 'Kepler-22b mission');
                data.addColumn('string', 'Kepler title');
                data.addColumn('string', 'Kepler text');
                data.addColumn('number', 'Gliese 163 mission');
                data.addColumn('string', 'Gliese title');
                data.addColumn('string', 'Gliese text');
                data.addRows([
                    [new Date(2314, 2, 15), 12400, undefined, undefined,
                        10645, undefined, undefined],
                    [new Date(2314, 2, 16), 24045, 'Lalibertines', 'First encounter',
                        12374, undefined, undefined],
                    [new Date(2314, 2, 17), 35022, 'Lalibertines', 'They are very tall',
                        15766, 'Gallantors', 'First Encounter'],
                    [new Date(2314, 2, 18), 12284, 'Lalibertines', 'Attack on our crew!',
                        34334, 'Gallantors', 'Statement of shared principles'],
                    [new Date(2314, 2, 19), 8476, 'Lalibertines', 'Heavy casualties',
                        66467, 'Gallantors', 'Mysteries revealed'],
                    [new Date(2314, 2, 20), 0, 'Lalibertines', 'All crew lost',
                        79463, 'Gallantors', 'Omniscience achieved']
                ]);

                var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div2'));

                var options = {
                    displayAnnotations: true
                };

                chart.draw(data, options);
            }

        }

    }
})