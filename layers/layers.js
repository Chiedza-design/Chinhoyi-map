var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1 = new ol.format.GeoJSON();
var features_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1 = format_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1.readFeatures(json_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1.addFeatures(features_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1);
var lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1, 
                style: style_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1,
                popuplayertitle: 'CHEGUTU ROAD KML - CHEGUTU_ROAD_SHAPEFILE',
                interactive: true,
                title: '<img src="styles/legend/CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1.png" /> CHEGUTU ROAD KML - CHEGUTU_ROAD_SHAPEFILE'
            });
var format_CHINHOYIBOUNDARY_2 = new ol.format.GeoJSON();
var features_CHINHOYIBOUNDARY_2 = format_CHINHOYIBOUNDARY_2.readFeatures(json_CHINHOYIBOUNDARY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHINHOYIBOUNDARY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHINHOYIBOUNDARY_2.addFeatures(features_CHINHOYIBOUNDARY_2);
var lyr_CHINHOYIBOUNDARY_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHINHOYIBOUNDARY_2, 
                style: style_CHINHOYIBOUNDARY_2,
                popuplayertitle: 'CHINHOYI BOUNDARY',
                interactive: true,
                title: '<img src="styles/legend/CHINHOYIBOUNDARY_2.png" /> CHINHOYI BOUNDARY'
            });
var format_SETTLEMENTS_3 = new ol.format.GeoJSON();
var features_SETTLEMENTS_3 = format_SETTLEMENTS_3.readFeatures(json_SETTLEMENTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SETTLEMENTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SETTLEMENTS_3.addFeatures(features_SETTLEMENTS_3);
var lyr_SETTLEMENTS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SETTLEMENTS_3, 
                style: style_SETTLEMENTS_3,
                popuplayertitle: 'SETTLEMENTS',
                interactive: true,
                title: '<img src="styles/legend/SETTLEMENTS_3.png" /> SETTLEMENTS'
            });
var format_WATERWAYS_4 = new ol.format.GeoJSON();
var features_WATERWAYS_4 = format_WATERWAYS_4.readFeatures(json_WATERWAYS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATERWAYS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATERWAYS_4.addFeatures(features_WATERWAYS_4);
var lyr_WATERWAYS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATERWAYS_4, 
                style: style_WATERWAYS_4,
                popuplayertitle: 'WATERWAYS',
                interactive: true,
                title: '<img src="styles/legend/WATERWAYS_4.png" /> WATERWAYS'
            });
var format_WATER_5 = new ol.format.GeoJSON();
var features_WATER_5 = format_WATER_5.readFeatures(json_WATER_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WATER_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WATER_5.addFeatures(features_WATER_5);
var lyr_WATER_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WATER_5, 
                style: style_WATER_5,
                popuplayertitle: 'WATER',
                interactive: true,
                title: '<img src="styles/legend/WATER_5.png" /> WATER'
            });
var format_BUFFER_AREA_6 = new ol.format.GeoJSON();
var features_BUFFER_AREA_6 = format_BUFFER_AREA_6.readFeatures(json_BUFFER_AREA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFER_AREA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFER_AREA_6.addFeatures(features_BUFFER_AREA_6);
var lyr_BUFFER_AREA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFER_AREA_6, 
                style: style_BUFFER_AREA_6,
                popuplayertitle: 'BUFFER_AREA',
                interactive: true,
                title: '<img src="styles/legend/BUFFER_AREA_6.png" /> BUFFER_AREA'
            });
var format_RAILWAYLINE_7 = new ol.format.GeoJSON();
var features_RAILWAYLINE_7 = format_RAILWAYLINE_7.readFeatures(json_RAILWAYLINE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAILWAYLINE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAILWAYLINE_7.addFeatures(features_RAILWAYLINE_7);
var lyr_RAILWAYLINE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAILWAYLINE_7, 
                style: style_RAILWAYLINE_7,
                popuplayertitle: 'RAILWAY LINE',
                interactive: true,
                title: '<img src="styles/legend/RAILWAYLINE_7.png" /> RAILWAY LINE'
            });
var format_SMALL_ROADS_8 = new ol.format.GeoJSON();
var features_SMALL_ROADS_8 = format_SMALL_ROADS_8.readFeatures(json_SMALL_ROADS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMALL_ROADS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMALL_ROADS_8.addFeatures(features_SMALL_ROADS_8);
var lyr_SMALL_ROADS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMALL_ROADS_8, 
                style: style_SMALL_ROADS_8,
                popuplayertitle: 'SMALL_ROADS',
                interactive: true,
                title: '<img src="styles/legend/SMALL_ROADS_8.png" /> SMALL_ROADS'
            });
var format_ROADS_9 = new ol.format.GeoJSON();
var features_ROADS_9 = format_ROADS_9.readFeatures(json_ROADS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROADS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROADS_9.addFeatures(features_ROADS_9);
var lyr_ROADS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROADS_9, 
                style: style_ROADS_9,
                popuplayertitle: 'ROADS',
                interactive: true,
    title: 'ROADS<br />\
    <img src="styles/legend/ROADS_9_0.png" /> construction<br />\
    <img src="styles/legend/ROADS_9_1.png" /> footway<br />\
    <img src="styles/legend/ROADS_9_2.png" /> path<br />\
    <img src="styles/legend/ROADS_9_3.png" /> pedestrian<br />\
    <img src="styles/legend/ROADS_9_4.png" /> primary<br />\
    <img src="styles/legend/ROADS_9_5.png" /> residential<br />\
    <img src="styles/legend/ROADS_9_6.png" /> service<br />\
    <img src="styles/legend/ROADS_9_7.png" /> steps<br />\
    <img src="styles/legend/ROADS_9_8.png" /> tertiary<br />\
    <img src="styles/legend/ROADS_9_9.png" /> track<br />\
    <img src="styles/legend/ROADS_9_10.png" /> trunk<br />\
    <img src="styles/legend/ROADS_9_11.png" /> trunk_link<br />\
    <img src="styles/legend/ROADS_9_12.png" /> unclassified<br />\
    <img src="styles/legend/ROADS_9_13.png" /> <br />' });
var format_POWERLINES_10 = new ol.format.GeoJSON();
var features_POWERLINES_10 = format_POWERLINES_10.readFeatures(json_POWERLINES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POWERLINES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POWERLINES_10.addFeatures(features_POWERLINES_10);
var lyr_POWERLINES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POWERLINES_10, 
                style: style_POWERLINES_10,
                popuplayertitle: 'POWER LINES ',
                interactive: true,
                title: '<img src="styles/legend/POWERLINES_10.png" /> POWER LINES '
            });
var format_OPENSPACE_11 = new ol.format.GeoJSON();
var features_OPENSPACE_11 = format_OPENSPACE_11.readFeatures(json_OPENSPACE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPENSPACE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPENSPACE_11.addFeatures(features_OPENSPACE_11);
var lyr_OPENSPACE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPENSPACE_11, 
                style: style_OPENSPACE_11,
                popuplayertitle: 'OPEN SPACE',
                interactive: true,
                title: '<img src="styles/legend/OPENSPACE_11.png" /> OPEN SPACE'
            });
var format_TUCKSHOP_12 = new ol.format.GeoJSON();
var features_TUCKSHOP_12 = format_TUCKSHOP_12.readFeatures(json_TUCKSHOP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUCKSHOP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUCKSHOP_12.addFeatures(features_TUCKSHOP_12);
var lyr_TUCKSHOP_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TUCKSHOP_12, 
                style: style_TUCKSHOP_12,
                popuplayertitle: 'TUCKSHOP',
                interactive: true,
                title: '<img src="styles/legend/TUCKSHOP_12.png" /> TUCKSHOP'
            });
var format_SNOOKER_13 = new ol.format.GeoJSON();
var features_SNOOKER_13 = format_SNOOKER_13.readFeatures(json_SNOOKER_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SNOOKER_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SNOOKER_13.addFeatures(features_SNOOKER_13);
var lyr_SNOOKER_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SNOOKER_13, 
                style: style_SNOOKER_13,
                popuplayertitle: 'SNOOKER',
                interactive: true,
                title: '<img src="styles/legend/SNOOKER_13.png" /> SNOOKER'
            });
var format_TYRES_14 = new ol.format.GeoJSON();
var features_TYRES_14 = format_TYRES_14.readFeatures(json_TYRES_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TYRES_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TYRES_14.addFeatures(features_TYRES_14);
var lyr_TYRES_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TYRES_14, 
                style: style_TYRES_14,
                popuplayertitle: 'TYRES',
                interactive: true,
                title: '<img src="styles/legend/TYRES_14.png" /> TYRES'
            });
var format_WELDING_15 = new ol.format.GeoJSON();
var features_WELDING_15 = format_WELDING_15.readFeatures(json_WELDING_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WELDING_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WELDING_15.addFeatures(features_WELDING_15);
var lyr_WELDING_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WELDING_15, 
                style: style_WELDING_15,
                popuplayertitle: 'WELDING',
                interactive: true,
                title: '<img src="styles/legend/WELDING_15.png" /> WELDING'
            });
var format_CABIN_16 = new ol.format.GeoJSON();
var features_CABIN_16 = format_CABIN_16.readFeatures(json_CABIN_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABIN_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABIN_16.addFeatures(features_CABIN_16);
var lyr_CABIN_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CABIN_16, 
                style: style_CABIN_16,
                popuplayertitle: 'CABIN',
                interactive: true,
                title: '<img src="styles/legend/CABIN_16.png" /> CABIN'
            });
var format_CARWASH_17 = new ol.format.GeoJSON();
var features_CARWASH_17 = format_CARWASH_17.readFeatures(json_CARWASH_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARWASH_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARWASH_17.addFeatures(features_CARWASH_17);
var lyr_CARWASH_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARWASH_17, 
                style: style_CARWASH_17,
                popuplayertitle: 'CAR WASH',
                interactive: true,
                title: '<img src="styles/legend/CARWASH_17.png" /> CAR WASH'
            });
var format_COOKING_18 = new ol.format.GeoJSON();
var features_COOKING_18 = format_COOKING_18.readFeatures(json_COOKING_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COOKING_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COOKING_18.addFeatures(features_COOKING_18);
var lyr_COOKING_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COOKING_18, 
                style: style_COOKING_18,
                popuplayertitle: 'COOKING',
                interactive: true,
                title: '<img src="styles/legend/COOKING_18.png" /> COOKING'
            });
var format_MARKET_19 = new ol.format.GeoJSON();
var features_MARKET_19 = format_MARKET_19.readFeatures(json_MARKET_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARKET_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARKET_19.addFeatures(features_MARKET_19);
var lyr_MARKET_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MARKET_19, 
                style: style_MARKET_19,
                popuplayertitle: 'MARKET',
                interactive: true,
                title: '<img src="styles/legend/MARKET_19.png" /> MARKET'
            });
var format_GAS_20 = new ol.format.GeoJSON();
var features_GAS_20 = format_GAS_20.readFeatures(json_GAS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAS_20.addFeatures(features_GAS_20);
var lyr_GAS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GAS_20, 
                style: style_GAS_20,
                popuplayertitle: 'GAS',
                interactive: true,
                title: '<img src="styles/legend/GAS_20.png" /> GAS'
            });
var format_BANNERS_21 = new ol.format.GeoJSON();
var features_BANNERS_21 = format_BANNERS_21.readFeatures(json_BANNERS_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANNERS_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANNERS_21.addFeatures(features_BANNERS_21);
var lyr_BANNERS_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANNERS_21, 
                style: style_BANNERS_21,
                popuplayertitle: 'BANNERS',
                interactive: true,
                title: '<img src="styles/legend/BANNERS_21.png" /> BANNERS'
            });
var format_CHINHOYICAVES_22 = new ol.format.GeoJSON();
var features_CHINHOYICAVES_22 = format_CHINHOYICAVES_22.readFeatures(json_CHINHOYICAVES_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHINHOYICAVES_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHINHOYICAVES_22.addFeatures(features_CHINHOYICAVES_22);
var lyr_CHINHOYICAVES_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHINHOYICAVES_22, 
                style: style_CHINHOYICAVES_22,
                popuplayertitle: 'CHINHOYI CAVES',
                interactive: true,
                title: '<img src="styles/legend/CHINHOYICAVES_22.png" /> CHINHOYI CAVES'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1.setVisible(true);lyr_CHINHOYIBOUNDARY_2.setVisible(true);lyr_SETTLEMENTS_3.setVisible(true);lyr_WATERWAYS_4.setVisible(true);lyr_WATER_5.setVisible(true);lyr_BUFFER_AREA_6.setVisible(true);lyr_RAILWAYLINE_7.setVisible(true);lyr_SMALL_ROADS_8.setVisible(true);lyr_ROADS_9.setVisible(true);lyr_POWERLINES_10.setVisible(true);lyr_OPENSPACE_11.setVisible(true);lyr_TUCKSHOP_12.setVisible(true);lyr_SNOOKER_13.setVisible(true);lyr_TYRES_14.setVisible(true);lyr_WELDING_15.setVisible(true);lyr_CABIN_16.setVisible(true);lyr_CARWASH_17.setVisible(true);lyr_COOKING_18.setVisible(true);lyr_MARKET_19.setVisible(true);lyr_GAS_20.setVisible(true);lyr_BANNERS_21.setVisible(true);lyr_CHINHOYICAVES_22.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1,lyr_CHINHOYIBOUNDARY_2,lyr_SETTLEMENTS_3,lyr_WATERWAYS_4,lyr_WATER_5,lyr_BUFFER_AREA_6,lyr_RAILWAYLINE_7,lyr_SMALL_ROADS_8,lyr_ROADS_9,lyr_POWERLINES_10,lyr_OPENSPACE_11,lyr_TUCKSHOP_12,lyr_SNOOKER_13,lyr_TYRES_14,lyr_WELDING_15,lyr_CABIN_16,lyr_CARWASH_17,lyr_COOKING_18,lyr_MARKET_19,lyr_GAS_20,lyr_BANNERS_21,lyr_CHINHOYICAVES_22];
lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'stand_no': 'stand_no', });
lyr_CHINHOYIBOUNDARY_2.set('fieldAliases', {'id': 'id', });
lyr_SETTLEMENTS_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_WATERWAYS_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_WATER_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_BUFFER_AREA_6.set('fieldAliases', {'id': 'id', 'USE': 'USE', 'NAME': 'NAME', 'ID_1': 'ID_1', 'Chinhoyi_P': 'Chinhoyi_P', 'Chinhoyi_1': 'Chinhoyi_1', 'Chinhoyi_2': 'Chinhoyi_2', 'Chinhoyi_3': 'Chinhoyi_3', 'Chinhoyi_4': 'Chinhoyi_4', 'Chinhoyi_5': 'Chinhoyi_5', 'Chinhoyi_6': 'Chinhoyi_6', 'Chinhoyi_7': 'Chinhoyi_7', 'Chinhoyi_8': 'Chinhoyi_8', 'Chinhoyi_9': 'Chinhoyi_9', 'Chinhoyi10': 'Chinhoyi10', 'Chinhoyi11': 'Chinhoyi11', 'Chinhoyi12': 'Chinhoyi12', 'Chinhoyi13': 'Chinhoyi13', 'Chinhoyi14': 'Chinhoyi14', 'kobo EXCEL': 'kobo EXCEL', 'kobo EXC_1': 'kobo EXC_1', 'kobo EXC_2': 'kobo EXC_2', 'kobo EXC_3': 'kobo EXC_3', 'kobo EXC_4': 'kobo EXC_4', 'kobo EXC_5': 'kobo EXC_5', 'kobo EXC_6': 'kobo EXC_6', 'kobo EXC_7': 'kobo EXC_7', 'kobo EXC_8': 'kobo EXC_8', 'kobo EXC_9': 'kobo EXC_9', 'kobo EXC10': 'kobo EXC10', 'kobo EXC11': 'kobo EXC11', 'kobo EXC12': 'kobo EXC12', 'kobo EXC13': 'kobo EXC13', 'Area_sqm': 'Area_sqm', });
lyr_RAILWAYLINE_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_SMALL_ROADS_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'ford': 'ford', 'tracktype': 'tracktype', 'covered': 'covered', 'constructi': 'constructi', 'layer': 'layer', 'bridge': 'bridge', 'ref': 'ref', 'old_ref': 'old_ref', 'service': 'service', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'oneway': 'oneway', 'surface': 'surface', 'name': 'name', });
lyr_ROADS_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'smoothness': 'smoothness', 'ford': 'ford', 'tracktype': 'tracktype', 'covered': 'covered', 'constructi': 'constructi', 'layer': 'layer', 'bridge': 'bridge', 'ref': 'ref', 'old_ref': 'old_ref', 'service': 'service', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'oneway': 'oneway', 'surface': 'surface', 'name': 'name', });
lyr_POWERLINES_10.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'name': 'name', 'ID_1': 'ID_1', 'Chinhoyi_P': 'Chinhoyi_P', 'Chinhoyi_1': 'Chinhoyi_1', 'Chinhoyi_2': 'Chinhoyi_2', 'Chinhoyi_3': 'Chinhoyi_3', 'Chinhoyi_4': 'Chinhoyi_4', 'Chinhoyi_5': 'Chinhoyi_5', 'Chinhoyi_6': 'Chinhoyi_6', 'Chinhoyi_7': 'Chinhoyi_7', 'Chinhoyi_8': 'Chinhoyi_8', 'Chinhoyi_9': 'Chinhoyi_9', 'Chinhoyi10': 'Chinhoyi10', 'Chinhoyi11': 'Chinhoyi11', 'Chinhoyi12': 'Chinhoyi12', 'Chinhoyi13': 'Chinhoyi13', 'Chinhoyi14': 'Chinhoyi14', });
lyr_OPENSPACE_11.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_TUCKSHOP_12.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_SNOOKER_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_TYRES_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_WELDING_15.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_CABIN_16.set('fieldAliases', {'id': 'id', 'Cabin': 'Cabin', 'ID_1': 'ID_1', });
lyr_CARWASH_17.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'ID_1': 'ID_1', });
lyr_COOKING_18.set('fieldAliases', {'id': 'id', 'Cooking': 'Cooking', 'ID_1': 'ID_1', });
lyr_MARKET_19.set('fieldAliases', {'id': 'id', 'Market': 'Market', 'ID_1': 'ID_1', });
lyr_GAS_20.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_BANNERS_21.set('fieldAliases', {'id': 'id', 'ID_1': 'ID_1', });
lyr_CHINHOYICAVES_22.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', });
lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'stand_no': 'TextEdit', });
lyr_CHINHOYIBOUNDARY_2.set('fieldImages', {'id': 'TextEdit', });
lyr_SETTLEMENTS_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_WATERWAYS_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'width': 'Range', 'name': 'TextEdit', });
lyr_WATER_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_BUFFER_AREA_6.set('fieldImages', {'id': 'TextEdit', 'USE': 'TextEdit', 'NAME': 'TextEdit', 'ID_1': 'TextEdit', 'Chinhoyi_P': 'TextEdit', 'Chinhoyi_1': 'TextEdit', 'Chinhoyi_2': 'TextEdit', 'Chinhoyi_3': 'TextEdit', 'Chinhoyi_4': 'TextEdit', 'Chinhoyi_5': 'TextEdit', 'Chinhoyi_6': 'TextEdit', 'Chinhoyi_7': 'TextEdit', 'Chinhoyi_8': 'TextEdit', 'Chinhoyi_9': 'TextEdit', 'Chinhoyi10': 'TextEdit', 'Chinhoyi11': 'TextEdit', 'Chinhoyi12': 'TextEdit', 'Chinhoyi13': 'TextEdit', 'Chinhoyi14': 'TextEdit', 'kobo EXCEL': 'TextEdit', 'kobo EXC_1': 'TextEdit', 'kobo EXC_2': 'TextEdit', 'kobo EXC_3': 'TextEdit', 'kobo EXC_4': 'TextEdit', 'kobo EXC_5': 'TextEdit', 'kobo EXC_6': 'TextEdit', 'kobo EXC_7': 'TextEdit', 'kobo EXC_8': 'TextEdit', 'kobo EXC_9': 'TextEdit', 'kobo EXC10': 'TextEdit', 'kobo EXC11': 'TextEdit', 'kobo EXC12': 'TextEdit', 'kobo EXC13': 'TextEdit', 'Area_sqm': 'TextEdit', });
lyr_RAILWAYLINE_7.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_SMALL_ROADS_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'ford': 'TextEdit', 'tracktype': 'TextEdit', 'covered': 'TextEdit', 'constructi': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'service': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', });
lyr_ROADS_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'ford': 'TextEdit', 'tracktype': 'TextEdit', 'covered': 'TextEdit', 'constructi': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'service': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', });
lyr_POWERLINES_10.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'name': 'TextEdit', 'ID_1': 'TextEdit', 'Chinhoyi_P': 'TextEdit', 'Chinhoyi_1': 'TextEdit', 'Chinhoyi_2': 'TextEdit', 'Chinhoyi_3': 'TextEdit', 'Chinhoyi_4': 'TextEdit', 'Chinhoyi_5': 'TextEdit', 'Chinhoyi_6': 'TextEdit', 'Chinhoyi_7': 'CheckBox', 'Chinhoyi_8': 'TextEdit', 'Chinhoyi_9': 'CheckBox', 'Chinhoyi10': 'TextEdit', 'Chinhoyi11': 'TextEdit', 'Chinhoyi12': 'TextEdit', 'Chinhoyi13': 'TextEdit', 'Chinhoyi14': 'TextEdit', });
lyr_OPENSPACE_11.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_TUCKSHOP_12.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_SNOOKER_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_TYRES_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_WELDING_15.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_CABIN_16.set('fieldImages', {'id': 'TextEdit', 'Cabin': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_CARWASH_17.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_COOKING_18.set('fieldImages', {'id': 'TextEdit', 'Cooking': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_MARKET_19.set('fieldImages', {'id': 'TextEdit', 'Market': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_GAS_20.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_BANNERS_21.set('fieldImages', {'id': 'TextEdit', 'ID_1': 'TextEdit', });
lyr_CHINHOYICAVES_22.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', });
lyr_CHEGUTUROADKMLCHEGUTU_ROAD_SHAPEFILE_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'stand_no': 'no label', });
lyr_CHINHOYIBOUNDARY_2.set('fieldLabels', {'id': 'no label', });
lyr_SETTLEMENTS_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_WATERWAYS_4.set('fieldLabels', {'osm_id': 'inline label - visible with data', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_WATER_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', });
lyr_BUFFER_AREA_6.set('fieldLabels', {'id': 'no label', 'USE': 'no label', 'NAME': 'no label', 'ID_1': 'no label', 'Chinhoyi_P': 'no label', 'Chinhoyi_1': 'no label', 'Chinhoyi_2': 'no label', 'Chinhoyi_3': 'no label', 'Chinhoyi_4': 'no label', 'Chinhoyi_5': 'no label', 'Chinhoyi_6': 'no label', 'Chinhoyi_7': 'no label', 'Chinhoyi_8': 'no label', 'Chinhoyi_9': 'no label', 'Chinhoyi10': 'no label', 'Chinhoyi11': 'no label', 'Chinhoyi12': 'no label', 'Chinhoyi13': 'no label', 'Chinhoyi14': 'no label', 'kobo EXCEL': 'no label', 'kobo EXC_1': 'no label', 'kobo EXC_2': 'no label', 'kobo EXC_3': 'no label', 'kobo EXC_4': 'no label', 'kobo EXC_5': 'no label', 'kobo EXC_6': 'no label', 'kobo EXC_7': 'no label', 'kobo EXC_8': 'no label', 'kobo EXC_9': 'no label', 'kobo EXC10': 'no label', 'kobo EXC11': 'no label', 'kobo EXC12': 'no label', 'kobo EXC13': 'no label', 'Area_sqm': 'no label', });
lyr_RAILWAYLINE_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_SMALL_ROADS_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'ford': 'no label', 'tracktype': 'no label', 'covered': 'no label', 'constructi': 'no label', 'layer': 'no label', 'bridge': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'service': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_ROADS_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'ford': 'no label', 'tracktype': 'no label', 'covered': 'no label', 'constructi': 'no label', 'layer': 'no label', 'bridge': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'service': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_POWERLINES_10.set('fieldLabels', {'id': 'no label', 'Type': 'no label', 'name': 'no label', 'ID_1': 'no label', 'Chinhoyi_P': 'no label', 'Chinhoyi_1': 'no label', 'Chinhoyi_2': 'no label', 'Chinhoyi_3': 'no label', 'Chinhoyi_4': 'no label', 'Chinhoyi_5': 'no label', 'Chinhoyi_6': 'no label', 'Chinhoyi_7': 'no label', 'Chinhoyi_8': 'no label', 'Chinhoyi_9': 'no label', 'Chinhoyi10': 'no label', 'Chinhoyi11': 'no label', 'Chinhoyi12': 'no label', 'Chinhoyi13': 'no label', 'Chinhoyi14': 'no label', });
lyr_OPENSPACE_11.set('fieldLabels', {'id': 'no label', 'ID_1': 'no label', });
lyr_TUCKSHOP_12.set('fieldLabels', {'id': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_SNOOKER_13.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_TYRES_14.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_WELDING_15.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_CABIN_16.set('fieldLabels', {'id': 'inline label - always visible', 'Cabin': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_CARWASH_17.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_COOKING_18.set('fieldLabels', {'id': 'inline label - always visible', 'Cooking': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_MARKET_19.set('fieldLabels', {'id': 'inline label - always visible', 'Market': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_GAS_20.set('fieldLabels', {'id': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_BANNERS_21.set('fieldLabels', {'id': 'inline label - always visible', 'ID_1': 'inline label - always visible', });
lyr_CHINHOYICAVES_22.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'inline label - always visible', 'fclass': 'inline label - always visible', });
lyr_CHINHOYICAVES_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});