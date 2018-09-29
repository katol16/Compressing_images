var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;
 
    INPUT_path_to_your_images = 'sourceImages/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    OUTPUT_path = 'minifyImages/';
    

 	// W poniższej funkcji '-quality' oznacza ile mamy zostawić jakości naszego zdjęcia. Im mniej tym mniejszy rozmiar zdjęcia
 	// np. dla '10' zdjecie bedzie bardzo małe dla '90' bardzo duże
 	// Możesz spróbować później połączyć skypt ze zmianą nazwy i z minifikowaniem zdjęć

 	// Ty ustawiłeś tutaj 30%, ale warto sięz astanowić czy nie dać czegoś pomiędzy 20% a 30%, bo dla 30# te zdj wciąż są dosc duże
    compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
        {jpg: {engine: 'mozjpeg', command: ['-quality', '30']}},
        {png: {engine: 'pngquant', command: ['--quality=20-50']}},
        {svg: {engine: 'svgo', command: '--multipass'}},
        {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
   });