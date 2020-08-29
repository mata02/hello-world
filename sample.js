// This long string is placed here due to jsFiddle limitations.
// It is usually loaded with AJAX.
var polyline = [
    'hldhx@lnau`BCG_EaC??cFjAwDjF??uBlKMd@}@z@??aC^yk@z_@se@b[wFdE??wFfE}N',
    'fIoGxB_I\\gG}@eHoCyTmPqGaBaHOoD\\??yVrGotA|N??o[N_STiwAtEmHGeHcAkiA}^',
    'aMyBiHOkFNoI`CcVvM??gG^gF_@iJwC??eCcA]OoL}DwFyCaCgCcCwDcGwHsSoX??wI_E',
    'kUFmq@hBiOqBgTwS??iYse@gYq\\cp@ce@{vA}s@csJqaE}{@iRaqE{lBeRoIwd@_T{]_',
    'Ngn@{PmhEwaA{SeF_u@kQuyAw]wQeEgtAsZ}LiCarAkVwI}D??_}RcjEinPspDwSqCgs@',
    'sPua@_OkXaMeT_Nwk@ob@gV}TiYs[uTwXoNmT{Uyb@wNg]{Nqa@oDgNeJu_@_G}YsFw]k',
    'DuZyDmm@i_@uyIJe~@jCg|@nGiv@zUi_BfNqaAvIow@dEed@dCcf@r@qz@Egs@{Acu@mC',
    'um@yIey@gGig@cK_m@aSku@qRil@we@{mAeTej@}Tkz@cLgr@aHko@qOmcEaJw~C{w@ka',
    'i@qBchBq@kmBS{kDnBscBnFu_Dbc@_~QHeU`IuyDrC_}@bByp@fCyoA?qMbD}{AIkeAgB',
    'k_A_A{UsDke@gFej@qH{o@qGgb@qH{`@mMgm@uQus@kL{_@yOmd@ymBgwE}x@ouBwtA__',
    'DuhEgaKuWct@gp@cnBii@mlBa_@}|Asj@qrCg^eaC}L{dAaJ_aAiOyjByH{nAuYu`GsAw',
    'Xyn@ywMyOyqD{_@cfIcDe}@y@aeBJmwA`CkiAbFkhBlTgdDdPyiB`W}xDnSa}DbJyhCrX',
    'itAhT}x@bE}Z_@qW_Kwv@qKaaAiBgXvIm}A~JovAxCqW~WanB`XewBbK{_A`K}fBvAmi@',
    'xBycBeCauBoF}}@qJioAww@gjHaPopA_NurAyJku@uGmi@cDs[eRaiBkQstAsQkcByNma',
    'CsK_uBcJgbEw@gkB_@ypEqDoqSm@eZcDwjBoGw`BoMegBaU_`Ce_@_uBqb@ytBwkFqiT_',
    'fAqfEwe@mfCka@_eC_UmlB}MmaBeWkkDeHwqAoX}~DcBsZmLcxBqOwqE_DkyAuJmrJ\\o',
    '~CfIewG|YibQxBssB?es@qGciA}RorAoVajA_nAodD{[y`AgPqp@mKwr@ms@umEaW{dAm',
    'b@umAw|@ojBwzDaaJsmBwbEgdCsrFqhAihDquAi`Fux@}_Dui@_eB_u@guCuyAuiHukA_',
    'lKszAu|OmaA{wKm}@clHs_A_rEahCssKo\\sgBsSglAqk@yvDcS_wAyTwpBmPc|BwZknF',
    'oFscB_GsaDiZmyMyLgtHgQonHqT{hKaPg}Dqq@m~Hym@c`EuiBudIabB{hF{pWifx@snA',
    'w`GkFyVqf@y~BkoAi}Lel@wtc@}`@oaXi_C}pZsi@eqGsSuqJ|Lqeb@e]kgPcaAu}SkDw',
    'zGhn@gjYh\\qlNZovJieBqja@ed@siO{[ol\\kCmjMe\\isHorCmec@uLebB}EqiBaCg}',
    '@m@qwHrT_vFps@kkI`uAszIrpHuzYxx@e{Crw@kpDhN{wBtQarDy@knFgP_yCu\\wyCwy',
    'A{kHo~@omEoYmoDaEcPiuAosDagD}rO{{AsyEihCayFilLaiUqm@_bAumFo}DgqA_uByi',
    '@swC~AkzDlhA}xEvcBa}Cxk@ql@`rAo|@~bBq{@``Bye@djDww@z_C_cAtn@ye@nfC_eC',
    '|gGahH~s@w}@``Fi~FpnAooC|u@wlEaEedRlYkrPvKerBfYs}Arg@m}AtrCkzElw@gjBb',
    'h@woBhR{gCwGkgCc[wtCuOapAcFoh@uBy[yBgr@c@iq@o@wvEv@sp@`FajBfCaq@fIipA',
    'dy@ewJlUc`ExGuaBdEmbBpBssArAuqBBg}@s@g{AkB{bBif@_bYmC}r@kDgm@sPq_BuJ_',
    's@{X_{AsK_d@eM{d@wVgx@oWcu@??aDmOkNia@wFoSmDyMyCkPiBePwAob@XcQ|@oNdCo',
    'SfFwXhEmOnLi\\lbAulB`X_d@|k@au@bc@oc@bqC}{BhwDgcD`l@ed@??bL{G|a@eTje@',
    'oS~]cLr~Bgh@|b@}Jv}EieAlv@sPluD{z@nzA_]`|KchCtd@sPvb@wSb{@ko@f`RooQ~e',
    '[upZbuIolI|gFafFzu@iq@nMmJ|OeJn^{Qjh@yQhc@uJ~j@iGdd@kAp~BkBxO{@|QsAfY',
    'gEtYiGd]}Jpd@wRhVoNzNeK`j@ce@vgK}cJnSoSzQkVvUm^rSgc@`Uql@xIq\\vIgg@~k',
    'Dyq[nIir@jNoq@xNwc@fYik@tk@su@neB}uBhqEesFjoGeyHtCoD|D}Ed|@ctAbIuOzqB',
    '_}D~NgY`\\um@v[gm@v{Cw`G`w@o{AdjAwzBh{C}`Gpp@ypAxn@}mAfz@{bBbNia@??jI',
    'ab@`CuOlC}YnAcV`@_^m@aeB}@yk@YuTuBg^uCkZiGk\\yGeY}Lu_@oOsZiTe[uWi[sl@',
    'mo@soAauAsrBgzBqgAglAyd@ig@asAcyAklA}qAwHkGi{@s~@goAmsAyDeEirB_{B}IsJ',
    'uEeFymAssAkdAmhAyTcVkFeEoKiH}l@kp@wg@sj@ku@ey@uh@kj@}EsFmG}Jk^_r@_f@m',
    '~@ym@yjA??a@cFd@kBrCgDbAUnAcBhAyAdk@et@??kF}D??OL'
].join('');


function splitLineString(geometry, minSegmentLength, options) {

    function calculatePointsDistance(coord1, coord2) {
        var dx = coord1[0] - coord2[0];
        var dy = coord1[1] - coord2[1];
        return Math.sqrt(dx * dx + dy * dy);
    };

    function calculateSplitPointCoords(startNode, nextNode, distanceBetweenNodes, distanceToSplitPoint) {
        var d = distanceToSplitPoint / distanceBetweenNodes;
        var x = nextNode[0] + (startNode[0] - nextNode[0]) * d;
        var y = nextNode[1] + (startNode[1] - nextNode[1]) * d;
        return [x, y];
    };

    function calculateAngle(startNode, nextNode, alwaysUp) {
        var x = (startNode[0] - nextNode[0]);
        var y = (startNode[1] - nextNode[1]);
        var angle = Math.atan(x / y);
        if (!alwaysUp) {
            angle = y > 0 ? angle + Math.PI : x < 0 ? angle + Math.PI * 2 : angle;
        }
        return angle;
    };

    var splitPoints = [];
    var coords = geometry.getCoordinates();

    var coordIndex = 0;
    var startPoint = coords[coordIndex];
    var nextPoint = coords[coordIndex + 1];
    var angle = calculateAngle(startPoint, nextPoint, options.alwaysUp);

    var n = Math.ceil(geometry.getLength() / minSegmentLength);
    var segmentLength = geometry.getLength() / n;
    var currentSegmentLength = options.midPoints ? segmentLength / 2 : segmentLength;

    for (var i = 0; i <= n; i++) {

        var distanceBetweenPoints = calculatePointsDistance(startPoint, nextPoint);
        currentSegmentLength += distanceBetweenPoints;

        if (currentSegmentLength < segmentLength) {
            coordIndex++;
            if (coordIndex < coords.length - 1) {
                startPoint = coords[coordIndex];
                nextPoint = coords[coordIndex + 1];
                angle = calculateAngle(startPoint, nextPoint, options.alwaysUp);
                i--;
                continue;
            } else {
                if (!options.midPoints) {
                    var splitPointCoords = nextPoint;
                    splitPointCoords.push(angle);
                    splitPoints.push(splitPointCoords);
                }
                break;
            }
        } else {
            var distanceToSplitPoint = currentSegmentLength - segmentLength;
            var splitPointCoords = calculateSplitPointCoords(startPoint, nextPoint, distanceBetweenPoints, distanceToSplitPoint);
            startPoint = splitPointCoords.slice();
            splitPointCoords.push(angle);
            splitPoints.push(splitPointCoords);
            currentSegmentLength = 0;
        }
    }

    return splitPoints;
};

var route = new ol.format.Polyline({
    factor: 1e6
}).readGeometry(polyline, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});

var routeCoords = route.getCoordinates();
var routeLength = routeCoords.length;

var routeFeature = new ol.Feature({
    type: 'route',
    geometry: route
});
//   var startMarker = new ol.Feature({
//     type: 'icon',
//     geometry: new ol.geom.Point(routeCoords[0])
//   });
//   var endMarker = new ol.Feature({
//     type: 'icon',
//     geometry: new ol.geom.Point(routeCoords[routeLength - 1])
//   });

var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var repeat = false;
var timer = -1;

var style = function (feature, resolution) {

    // if (feature.get('type') == 'route') {
        var styles = [
            new ol.style.Style({
                stroke: new ol.style.Stroke({
                    width: 6,
                    color: [237, 212, 0, 0.8],
                })
            })
        ];

        if (timer < 0) {
            feature.unset('splitPoints', true);
        } else {
            var splitPoints = feature.get('splitPoints');
            if (!splitPoints) {
                splitPoints = splitLineString(feature.getGeometry(), 2 * resolution, { alwaysUp: false, midPoints: true });
                feature.set('splitPoints', splitPoints, true);
            }
            if (!repeat && timer >= splitPoints.length) {
                stopAnimation(true);
            } else {
                var index = timer % splitPoints.length;
                var point = splitPoints[index];
                styles.push(
                    new ol.style.Style({
                        geometry: new ol.geom.Point([point[0], point[1]]),
                        image: new ol.style.Circle({
                            radius: 7,
                            fill: new ol.style.Fill({color: '#999'}),
                            stroke: new ol.style.Stroke({
                              color: 'white', width: 2
                            })
                        // image: new ol.style.Icon({
                        //     src: 'https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/19-32.png',
                        //     rotation: point[2]
                        }),
                        zIndex: 1
                    })
                );
            }
        }
        return styles;
    // } else {
    //     return [
    //         new ol.style.Style({
    //             image: new ol.style.Icon({
    //                 anchor: [0.5, 1],
    //                 src: 'https://openlayers.org/en/v4.6.5/examples/data/icon.png',
    //             })
    //         })
    //     ];
    // }

}

var vector = new ol.layer.Vector({
    source: new ol.source.Vector({
        // features: [routeFeature, startMarker, endMarker]
        features: [routeFeature]
    }),
    style: style
});

var map = new ol.Map({
    layers: [raster, vector],
    target: 'map',
    view: new ol.View({
        center: [-5639523.95, -3501274.52],
        zoom: 10
    })
});


var animating = false;
var token;
var speedInput = document.getElementById('speed');
var startButton = document.getElementById('start-animation');

function startAnimation() {

    if (animating) {
        stopAnimation(false);
    } else {
        animating = true;
        startButton.textContent = '停止';
        token = setInterval(function () {
            timer++;
            vector.setStyle(style);
        }, 6000 / speedInput.value);

    }
}

function stopAnimation(ended) {
    animating = false;
    startButton.textContent = '再生';
    clearInterval(token);
    timer = -1;
    if (!ended) {
        vector.setStyle(style);
    }
}

startButton.addEventListener('click', startAnimation, false);
