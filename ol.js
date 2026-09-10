const orthoSource = new GeoTIFF({
  sources: [{
    url: 'https://your-server.com',
    nodata: 0 // JPEG圧縮時の黒い余白を透過
  }]
});
