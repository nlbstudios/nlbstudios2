(function($) {

    $.fn.changeType = function() {

        var data = [
                {
                "productType": "Banners",
                "paperType": [
                    {
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "13oz. Scrim Vinyl"
                    },
                    {
                        "paper": "18oz. Scrim Vinyl"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    },
                    {
                        "size": "2\'x 3\'"
                    },
                    {
                        "size": "3\' x 4\'"
                    },
                    {
                        "size": "4\' x 6\'"
                    }
                ],
                "inkCoverage": [
                  {
                        "ink": "Ink"
                    },
                    {
                        "ink": "4/0"
                    }
                ],
                "quantity": [
                  {
                    "count":"Quantity"
                  },
                  {
                        "count": "1"
                    }
                ]
            },
            {
                "productType": "Booklets/Catalogs",
                "paperType": [{
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "60# with self cover"
                    },
                    {
                        "paper": "60# with separate cover"
                    },
                    {
                        "paper": "70# with self cover"
                    },
                    {
                        "paper": "70# with separate cover"
                    },
                    {
                        "paper": "100# Gloss Text with self cover"
                    },
                    {
                        "paper": "100# Gloss Text with separate cover"
                    },

                ],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "5.5\" x 8.5\""
                    },
                    {
                        "size": "6\" x 9\""
                    },
                    {
                        "size": "8.5\" x 11\""
                    },
                ],
                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/4"
                    }
                ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Bookmarks",
                "paperType": [{
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    },
                    {
                        "paper": "10pt C2S"
                    },
                    {
                        "paper": "12pt C1S"
                    },
                    {
                        "paper": "12pt C2S"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "1.5\" x 7\""
                    },
                    {
                        "size": "2\" x 8\""
                    }
                ],
                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    }
                ],


                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Brochures (Half-fold)",
                "paperType": [{
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "70# Uncoated Text"
                    },
                    {
                        "paper": "80# Gloss Text"
                    },
                    {
                        "paper": "100# Gloss Text"
                    },
                    {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "5.5\" x 8.5\""
                    },
                    {
                        "size": "8.5\" x 11\""
                    },
                    {
                        "size": "11\" x 17\""
                    }
                ],
                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    }
                ],


                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Brochures (Trifold)",
                "paperType": [{
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "70# Uncoated Text"
                    },
                    {
                        "paper": "80# Gloss Text"
                    },
                    {
                        "paper": "100# Gloss Text"
                    },
                    {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "8.5\" x 11\""
                    },
                    {
                        "size": "11\" x 17\""
                    }
                ],
                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],


                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Business Cards",
                "paperType": [{
                        "paper": "Stock Type"
                    }, {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "80# Gloss Cover"
                    },
                    {
                        "paper": "80# Dull Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    },
                    {
                        "paper": "100# Gloss Cover"
                    },
                    {
                        "paper": "100# Dull Cover"
                    },
                    {
                        "paper": "10pt C2S"
                    },
                    {
                        "paper": "12pt C1S"
                    },
                    {
                        "paper": "12pt C2S"
                    },
                    {
                        "paper": "130# Uncoated Cover"
                    },
                ],
                "paperSize": [{
                    "size": "Size"
                }, {
                    "size": "2\" x 3.5\""
                }],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],


                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Doorhangers",
                "paperType": [{
                        "paper": "Stock Type"
                    }, {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    },
                    {
                        "paper": "12pt C2S"
                    },
                    {
                        "paper": "130# Uncoated Cover"
                    },
                ],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "3.5\" x 8.5\""
                    },
                    {
                        "size": "4.25\" x 11\""
                    }
                ],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],


                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Envelopes (Announcement)",
                "paperType": [{
                    "paper": "Stock Type"
                }, {
                    "paper": "28#"
                }],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "A2"
                    },
                    {
                        "size": "A6"
                    },
                    {
                        "size": "A7"
                    },
                ],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]

            },
            {
                "productType": "Envelopes (Commercial)",
                "paperType": [{
                    "paper": "Stock Type"
                }, {
                    "paper": "28#"
                }],
                "paperSize": [{
                        "size": "Size"
                    },
                    {
                        "size": "6 3/4\" Remittance"
                    },
                    {
                        "size": "#9"
                    },
                    {
                        "size": "#10"
                    },
                    {
                        "size": "9\" x 12\""
                    },
                    {
                        "size": "10\" x 13\""
                    }
                ],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Flyers",
                "paperType": [{
                        "paper": "Stock Type"
                    }, {
                        "paper": "60# Uncoated Text"
                    },
                    {
                        "paper": "70# Uncoated Text"
                    },
                    {
                        "paper": "80# Gloss Text"
                    },
                    {
                        "paper": "100# Gloss Text"
                    },
                    {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "80# Gloss Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    },
                    {
                        "paper": "100# Gloss Cover"
                    },
                    {
                        "paper": "12pt C2S"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    },
                    {
                        "size": "5.5\" x 8.5\""
                    },
                    {
                        "size": "8.5\" x 11\""
                    }
                ],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Folders",
                "paperType": [{
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "80# Gloss Cover"
                    },
                    {
                        "paper": "100# Gloss Cover"
                    },
                    {
                        "paper": "12pt C1S"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    },
                    {
                        "size": "5.5\" x 8.5\""
                    },
                    {
                        "size": "8.5\" x 11\""
                    }
                ],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Greeting Cards",
                "paperType": [{
                        "paper": "Stock Type"
                    }, {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "80# Gloss Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    },
                    {
                        "paper": "100# Gloss Cover"
                    },
                    {
                        "paper": "10pt C1S"
                    },
                    {
                        "paper": "10pt C2S"
                    },
                    {
                        "paper": "12pt C1S"
                    },
                    {
                        "paper": "12pt C2S"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    },
                    {
                        "size": "5.5\" x 8.5\""
                    },
                    {
                        "size": "6\" x 8\""
                    },
                    {
                        "size": "7\" x 10\""
                    },
                ],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    },
                ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Letterhead",
                "paperType": [{
                    "paper": "Stock Type"
                }, {
                    "paper": "70# Uncoated Text"
                }],
                "paperSize": [{
                    "size": "Select"
                }, {
                    "size": "8.5\" x 11\""
                }],

                "inkCoverage": [{
                        "ink": "Ink"
                    },
                    {
                        "ink": "1/0"
                    },
                    {
                        "ink": "1/1"
                    },
                    {
                        "ink": "4/0"
                    },
                    {
                        "ink": "4/1"
                    },
                    {
                        "ink": "4/4"
                    }
                ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Notepads",
                "paperType": [{
                        "paper": "Stock Type"
                    }, {
                        "paper": "60# Uncoated Text"
                    },
                    {
                        "paper": "70# Uncoated Text"
                    },
                    {
                        "paper": "60# Carbonless"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    },
                    {
                        "size": "4.25\" x 5.5\""
                    },
                    {
                        "size": "4\" x 6\""
                    },
                    {
                        "size": "5\" x 7\""
                    },
                    {
                        "size": "5.5\" x 8.5\""
                    },
                    {
                        "size": "8.5\" x 11\""
                    }
                ],

                "inkCoverage": [
                  {
                     "ink": "Ink"
                  },
                  {
                     "ink": "1/0"
                  },
                  {
                     "ink": "1/1"
                  },
                  {
                     "ink": "4/0"
                  },
                  {
                     "ink": "4/1"
                  },
                  {
                     "ink": "4/4"
                  }
              ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2000"
                    }
                ]
            },
            {
                "productType": "Postcards",
                "paperType": [{
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "80# Gloss Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    },
                    {
                        "paper": "100# Gloss Cover"
                    },
                    {
                        "paper": "10pt C1S"
                    },
                    {
                        "paper": "10pt C2S"
                    },
                    {
                        "paper": "12pt C2S"
                    },
                    {
                        "paper": "130# Uncoated Cover"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "4\" x 6\""
                    },
                    {
                        "size": "4.25\" x 5.5\""
                    },
                    {
                        "size": "5\" x 7\""
                    },
                    {
                        "size": "6\" x 9\""
                    },
                    {
                        "size": "6\" x 11\""
                    }
                ],

                "inkCoverage": [
                  {
                     "ink": "Ink"
                  },
                  {
                     "ink": "1/0"
                  },
                  {
                     "ink": "1/1"
                  },
                  {
                     "ink": "4/0"
                  },
                  {
                     "ink": "4/1"
                  },
                  {
                     "ink": "4/4"
                  }
              ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Rackcards",
                "paperType": [{
                        "paper": "Stock Type"
                    },
                    {
                        "paper": "80# Uncoated Cover"
                    },
                    {
                        "paper": "80# Gloss Cover"
                    },
                    {
                        "paper": "100# Uncoated Cover"
                    },
                    {
                        "paper": "100# Gloss Cover"
                    },
                    {
                        "paper": "10pt C1S"
                    },
                    {
                        "paper": "10pt C2S"
                    },
                    {
                        "paper": "12pt C2S"
                    },
                    {
                        "paper": "130# Uncoated Cover"
                    }
                ],
                "paperSize": [
                  {
                    "size": "Size"
                },
                {
                    "size": "4\" x 9\""
                }
              ],

                "inkCoverage": [
                  {
                     "ink": "Ink"
                  },
                  {
                     "ink": "1/0"
                  },
                  {
                     "ink": "1/1"
                  },
                  {
                     "ink": "4/0"
                  },
                  {
                     "ink": "4/1"
                  },
                  {
                     "ink": "4/4"
                  }
              ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    },
                  {
                        "count": "500"
                    },
                  {
                        "count": "1000"
                    },
                  {
                        "count": "2500"
                    },
                  {
                        "count": "5000"
                    },
                  {
                        "count": "10000"
                    },
                  {
                        "count": "15000"
                    },
                  {
                        "count": "20000"
                    },
                  {
                        "count": "25000"
                    },
                  {
                        "count": "30000"
                    },
                  {
                        "count": "35000"
                    },
                  {
                        "count": "40000"
                    },
                  {
                        "count": "45000"
                    },
                  {
                        "count": "50000"
                    },
                ]
            },
            {
                "productType": "Yard Signs",
                "paperType": [{
                        "paper": "Stock Type"
                    }, {
                        "paper": "3/16\" Coroplast"
                    },
                    {
                        "paper": "3/16\" Foam Core"
                    }
                ],
                "paperSize": [{
                        "size": "Size"
                    }, {
                        "size": "2\' x 3\'"
                    },
                    {
                        "size": "3\' x 4\'"
                    },
                    {
                        "size": "4\' x 6\'"
                    }
                ],

                "inkCoverage": [
                  {
                     "ink": "Ink"
                  },
                  {
                     "ink": "1/0"
                  },
                  {
                     "ink": "1/1"
                  },
                  {
                     "ink": "4/0"
                  },
                  {
                     "ink": "4/1"
                  },
                  {
                     "ink": "4/4"
                  }
              ],

                "quantity": [
                  {
                        "count": "Quantity"
                  },
                  {
                        "count": "50"
                    },
                  {
                        "count": "100"
                    },
                  {
                        "count": "250"
                    }
                ]
            },

        ]

        var options_productType = '<option>Select<\/option>';
        $.each(data, function(i, d) {
            options_productType += '<option value="' + d.productType + '">' + d.productType + '<\/option>';
        });
        $("select#productType", this).html(options_productType);

        $("select#productType", this).change(function() {
            var index = $(this).get(0).selectedIndex;
            var d = data[index - 1]; // -1 because index 0 is for empty 'Select' option
            var options = '';
            if (index > 0) {
                $.each(d.paperType, function(i, j) {
                    options += '<option value="' + j.paper + '">' + j.paper + '<\/option>';
                });
            } else {
                options += '<option>Select<\/option>';
            }
            $("select#paperType").html(options);
        })


        var options_productType = '<option>Select<\/option>';
        $.each(data, function(i, d) {
            options_productType += '<option value="' + d.productType + '">' + d.productType + '<\/option>';
        });
        $("select#productType", this).html(options_productType);

        $("select#productType", this).change(function() {
            var index = $(this).get(0).selectedIndex;
            var d = data[index - 1]; // -1 because index 0 is for empty 'Select' option
            var options = '';
            if (index > 0) {
                $.each(d.paperSize, function(i, j) {
                    options += '<option value="' + j.size + '">' + j.size + '<\/option>';
                });
            } else {
                options += '<option>Select<\/option>';
            }
            $("select#size").html(options);
        })

          var options_productType = '<option>Select<\/option>';
        $.each(data, function(i, d) {
            options_productType += '<option value="' + d.productType + '">' + d.productType + '<\/option>';
        });
        $("select#productType", this).html(options_productType);

        $("select#productType", this).change(function() {
            var index = $(this).get(0).selectedIndex;
            var d = data[index - 1]; // -1 because index 0 is for empty 'Select' option
            var options = '';
            if (index > 0) {
                $.each(d.inkCoverage, function(i, j) {
                    options += '<option value="' + j.ink + '">' + j.ink + '<\/option>';
                });
            } else {
                options += '<option>Select<\/option>';
            }
            $("select#ink").html(options);
        })


          var options_productType = '<option>Select<\/option>';
        $.each(data, function(i, d) {
            options_productType += '<option value="' + d.productType + '">' + d.productType + '<\/option>';
        });
        $("select#productType", this).html(options_productType);

        $("select#productType", this).change(function() {
            var index = $(this).get(0).selectedIndex;
            var d = data[index - 1]; // -1 because index 0 is for empty 'Select' option
            var options = '';
            if (index > 0) {
                $.each(d.quantity, function(i, j) {
                    options += '<option value="' + j.count + '">' + j.count + '<\/option>';
                });
            } else {
                options += '<option>Select<\/option>';
            }
            $("select#count").html(options);
        })
    };

})(jQuery);


$(document).ready(function() {
    $("form#search").changeType();
});
