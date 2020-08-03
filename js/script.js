var grid = 	[
  [
    null,
    null,
    null,
    null,
    null,
    null,
    {
      "char": "a",
      "across": {
        "is_start_of_word": true,
        "index": 2
      },
      "down": {
        "is_start_of_word": true,
        "index": 1
      }
    },
    {
      "char": "v",
      "across": {
        "is_start_of_word": false,
        "index": 2
      },
      "down": null
    },
    {
      "char": "ó",
      "across": {
        "is_start_of_word": false,
        "index": 2
      },
      "down": null
    }
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    {
      "char": "p",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 1
      }
    },
    null,
    null
  ],
  [
    {
      "char": "a",
      "across": {
        "is_start_of_word": true,
        "index": 0
      },
      "down": null
    },
    {
      "char": "b",
      "across": {
        "is_start_of_word": false,
        "index": 0
      },
      "down": null
    },
    {
      "char": "a",
      "across": {
        "is_start_of_word": false,
        "index": 0
      },
      "down": {
        "is_start_of_word": true,
        "index": 4
      }
    },
    {
      "char": "c",
      "across": {
        "is_start_of_word": false,
        "index": 0
      },
      "down": null
    },
    {
      "char": "a",
      "across": {
        "is_start_of_word": false,
        "index": 0
      },
      "down": {
        "is_start_of_word": true,
        "index": 3
      }
    },
    {
      "char": "x",
      "across": {
        "is_start_of_word": false,
        "index": 0
      },
      "down": null
    },
    {
      "char": "i",
      "across": {
        "is_start_of_word": false,
        "index": 0
      },
      "down": {
        "is_start_of_word": false,
        "index": 1
      }
    },
    null,
    null
  ],
  [
    null,
    null,
    {
      "char": "r",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 4
      }
    },
    null,
    {
      "char": "s",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 3
      }
    },
    null,
    {
      "char": "t",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 1
      }
    },
    null,
    null
  ],
  [
    null,
    null,
    {
      "char": "g",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 4
      }
    },
    null,
    {
      "char": "f",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 3
      }
    },
    null,
    {
      "char": "o",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 1
      }
    },
    null,
    null
  ],
  [
    null,
    null,
    {
      "char": "o",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 4
      }
    },
    null,
    {
      "char": "a",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 3
      }
    },
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    {
      "char": "l",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 4
      }
    },
    null,
    {
      "char": "l",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 3
      }
    },
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    {
      "char": "a",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 4
      }
    },
    null,
    {
      "char": "t",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 3
      }
    },
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    {
      "char": "o",
      "across": null,
      "down": {
        "is_start_of_word": false,
        "index": 3
      }
    },
    null,
    null,
    null,
    null
  ]
];
var index_to_row_column = [];
for(var r = 0; r < grid.length; r++){
	for(var c = 0; c < grid[r].length; c++){
		var cell = grid[r][c];
		if(cell == null) continue;
		if(cell['across'] && cell['across']['is_start_of_word'])
			index_to_row_column[cell['across']['index']] = {"row" : r, "col" : c};
		if(cell['down'] && cell['down']['is_start_of_word'])
			index_to_row_column[cell['down']['index']] = {"row" : r, "col" : c};			
	}
}



  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-6553843-10']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
