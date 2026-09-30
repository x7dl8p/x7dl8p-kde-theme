var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/ColdRipple/",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "520",
                            "popupWidth": "897"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "compactMode": "true",
                            "favoritesDisplay": "1",
                            "favoritesPortedToKAstats": "true",
                            "icon": "start-here-fedora",
                            "showActionButtonCaptions": "false",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "160",
                            "popupWidth": "156"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.textonly",
                            "showTitle": "true",
                            "title": "Network Speed"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/FaceGrid/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "showTitle": "false"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "255,255,255",
                            "gpu/all/usage": "204,204,204",
                            "memory/physical/used": "204,204,204",
                            "memory/physical/usedPercent": "204,204,204",
                            "network/(?!all).*/download": "204,204,204",
                            "network/all/download": "255,255,255",
                            "network/all/upload": "255,255,255"
                        },
                        "/SensorLabels": {
                            "cpu/all/usage": "CPU",
                            "gpu/all/usage": "GPU",
                            "memory/physical/used": "RAM",
                            "memory/physical/usedPercent": "RAM",
                            "network/(?!all).*/download": "DOWN/UP",
                            "network/all/download": "D",
                            "network/all/upload": "UP"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/usedPercent\",\"network/all/download\"]",
                            "lowPrioritySensorIds": "[]",
                            "totalSensors": "[]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.net"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "433",
                            "popupWidth": "324"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "customDateFormat": "dd/MM/yyyy",
                            "dateDisplayFormat": "BesideTime",
                            "dateFormat": "custom",
                            "showSeconds": "Always"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.7777777777777777,
            "hiding": "normal",
            "lengthMode": "fill",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0,
            "opacity": "adaptive"
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/General": {
                            "launchers": "applications:systemsettings.desktop,preferred://filemanager,preferred://browser,applications:org.kde.konsole.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3,
            "hiding": "autohide",
            "lengthMode": "fit",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0,
            "opacity": "adaptive"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
