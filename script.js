function temperature()
        {
          var c = document.getElementById("c").value;
          var f = (c*9/5)+32;
          document.getElementById("f").value = f;
        }

        function weight()
        {
          var c = document.getElementById("kg").value;
          var f = c*2.2;
          document.getElementById("pounds").value = f;
        }

        function distance()
        {
          var c = document.getElementById("km").value;
          var f = c*0.62137;
          document.getElementById("miles").value = f;
        }