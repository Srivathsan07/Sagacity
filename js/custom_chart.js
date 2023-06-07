
 
    //bar charts
    var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["EPN", "LPN", "SPN"],
      datasets: [{
        label: '',
        data: [180, 155, 220],
        backgroundColor: "#4472c4"
      }, 
      {
        label: '',
        data: [170, 150, 210],
        backgroundColor: "#ed7d31"
      }
     
    ]
    },options: { legend: { display: false } } 
  });
   
  var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Enzen QA", "UKPN QA "],
      datasets: [{
        label: 'apples',
        data: [23, 21],
        backgroundColor: "#4472c4"
      }, 
      {
        label: 'oranges',
        data: [17, 14],
        backgroundColor: "#ed7d31"
      },
      {
        label: 'oranges',
        data: [14, 17],
        backgroundColor: "#a5a5a5"
      }

    ]
   },options: { legend: { display: false } }
  });
  var ctx = document.getElementById("myChart3").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["EPN", "LPN", "SPN"],
      datasets: [{
        label: 'apples',
        data: [252, 290, 300],
        backgroundColor: "#4472c4"
      }, 
      {
        label: 'oranges',
        data: [230, 240, 180],
        backgroundColor: "#ed7d31"
      }
    ]
   },options: { legend: { display: false } }
  });
  
  var ctx = document.getElementById("myChart4").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["EPN", "LPN", "SPN"],
      datasets: [{
        label: 'apples',
        data: [28, 32, 45],
        backgroundColor: "#4472c4"
      }, 
      {
        label: 'oranges',
        data: [38, 12, 28],
        backgroundColor: "#ed7d31"
      },
      {
        label: 'oranges',
        data: [45, 31, 68],
        backgroundColor: "#a5a5a5"
      },
      {
        label: 'oranges',
        data: [22, 22, 33],
        backgroundColor: "#ffc000"
      }
    ]
   },options: { legend: { display: false } }
  });
  var ctx = document.getElementById("myChart5").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [""],
      datasets: [{
        label: 'apples',
        data: [98.4],
        backgroundColor: "#4472c4"
      }, 
      {
        label: 'oranges',
        data: [39],
        backgroundColor: "#70ad47"
      },
      {
        label: 'oranges',
        data: [98.5],
        backgroundColor: "#ffc000"
      }
    ]
   },options: { legend: { display: false } }
  });
 
      //pie chart
      var ctxP = document.getElementById("pieChart").getContext('2d');
      var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
          labels: ["EPN (25%)", "LPN (30%)" , "SPN (35%)"  ],
          datasets: [{
            data: [50, 50 , 300],
            backgroundColor: ["#ffc000","#70ad47", "#5b9bd5"],
            hoverBackgroundColor: ["#ffc000","#70ad47", "#5b9bd5"]
          }]
        },
        options: {
          responsive: true,
          legend: {
            position: 'right',
            display: false
          }
        }
      });
    var ctxP = document.getElementById("pieChart1").getContext('2d');
      var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
          labels: ["Unwanted (60%)", "Watch (40%)" ],
          datasets: [{
            data: [300, 50 ],
            backgroundColor: ["#DF8107", "#46BFBD"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
          }]
        },
        options: {
          responsive: true,
          legend: {
            display: false
            
            
          }
        }
      });
  
  
  
      $(document).ready(function(){
    
      if ($(window).width() < 700){
          alert()
          var ctxP = document.getElementById("pieChart").getContext('2d');
            var myPieChart = new Chart(ctxP, {
              type: 'pie',
              data: {
                labels: ["EPN (25%)", "LPN (30%)" , "SPN (35%)" ],
                datasets: [{
                  data: [50, 50,300],
                  backgroundColor: ["#ffc000","#70ad47", "#5b9bd5"],
                  hoverBackgroundColor: ["#ffc000","#70ad47", "#5b9bd5"]
                }]
              },
              options: {
                responsive: true,
                legend: {
                  position: 'bottom',
                  display: false
                }
              }
            });
            var ctxP = document.getElementById("pieChart1").getContext('2d');
      var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
          labels: ["Unwanted (60%)", "Watch (40%)" ],
          datasets: [{
            data: [300, 50 ],
            backgroundColor: ["#DF8107", "#46BFBD"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
          }]
        },
        options: {
          responsive: true,
          legend: {
            position: 'bottom', 
            display: false
            
          }
        }
      });
  
  
  
  
      }
      
      
  });
      
 