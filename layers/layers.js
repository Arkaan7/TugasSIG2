var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_geologilitologi_1 = new ol.format.GeoJSON();
var features_geologilitologi_1 = format_geologilitologi_1.readFeatures(json_geologilitologi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologilitologi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologilitologi_1.addFeatures(features_geologilitologi_1);
var lyr_geologilitologi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologilitologi_1, 
                style: style_geologilitologi_1,
                popuplayertitle: 'geologi litologi',
                interactive: true,
                title: '<img src="styles/legend/geologilitologi_1.png" /> geologi litologi'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_geologilitologi_1.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_geologilitologi_1];
lyr_geologilitologi_1.set('fieldAliases', {'SYMBOLS': 'SYMBOLS', 'NM_LEMBAR': 'NM_LEMBAR', 'NO_LEMBAR': 'NO_LEMBAR', 'PROJECT': 'PROJECT', 'NAME': 'NAME', 'FORMATION': 'FORMATION', 'CLASS_LITH': 'CLASS_LITH', 'T_CLASS_EN': 'T_CLASS_EN', 'B_CLASS_EN': 'B_CLASS_EN', 'DESCRIP1': 'DESCRIP1', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_geologilitologi_1.set('fieldImages', {'SYMBOLS': '', 'NM_LEMBAR': '', 'NO_LEMBAR': '', 'PROJECT': '', 'NAME': '', 'FORMATION': '', 'CLASS_LITH': '', 'T_CLASS_EN': '', 'B_CLASS_EN': '', 'DESCRIP1': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_geologilitologi_1.set('fieldLabels', {'SYMBOLS': 'no label', 'NM_LEMBAR': 'no label', 'NO_LEMBAR': 'no label', 'PROJECT': 'no label', 'NAME': 'no label', 'FORMATION': 'no label', 'CLASS_LITH': 'header label - visible with data', 'T_CLASS_EN': 'no label', 'B_CLASS_EN': 'no label', 'DESCRIP1': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'no label', });
lyr_geologilitologi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});