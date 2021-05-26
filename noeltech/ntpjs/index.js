        var checkbox = document.querySelector('input[name=theme]');
 <!-- This makes the Toggle menu work. The main thing to do is declare the function. If you refer to the noeltechindex.html we can see that the toggle switch is declared and styled using CSS -->
        checkbox.addEventListener('change', function() { 
            if(this.checked) {  <!-- This means that if toggle is checked or pressed -->
                trans()  <!-- It will transition -->
                document.documentElement.setAttribute('data-theme', 'dark')  <!-- When pressed it will transition to the dark theme styled in SCSS. -->
            } else {  <!-- Otherwise it will stay the colour it is now, which is a light colour. Also it is designed that it will only change the colour of the box -->
                trans()
                document.documentElement.setAttribute('data-theme', 'light')
            }
        })

        let trans = () => {  <!-- This is the transition code, it practically means that it will transition in 1 second to the other colour.  -->
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }
	