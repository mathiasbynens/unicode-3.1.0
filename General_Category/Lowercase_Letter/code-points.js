module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,152,203,149,236,58,14,4,29,186,139,166,240,35,108,121,103,252,119,99,50,25,181,16,89,45,16,16,50,36,17,80,255,183,243,111,239,191,221,127,231,239,79,199,209,241,233,8,29,169,163,116,180,142,209,113,117,104,221,209,186,163,117,71,235,142,214,29,173,59,90,119,180,238,104,221,209,186,163,117,159,214,125,90,247,105,221,232,247,213,239,219,255,190,47,116,164,142,210,225,191,71,199,213,177,255,190,248,211,113,116,124,58,180,46,180,46,180,46,180,46,180,46,180,46,180,46,181,46,181,46,181,46,181,46,181,46,181,46,181,46,181,38,181,166,180,166,180,166,180,166,180,166,180,166,180,166,20,167,100,111,217,90,231,91,231,90,231,90,231,70,231,70,231,70,231,70,231,70,231,148,247,119,117,238,234,220,213,185,171,115,171,115,171,115,171,115,34,248,137,95,136,93,136,91,136,89,136,87,136,85,136,83,136,83,136,81,136,79,136,77,136,75,136,73,136,65,72,127,124,62,167,181,210,29,210,28,210,27,210,26,210,25,210,24,210,23,210,22,169,115,210,21,210,20,210,19,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,210,18,163,107,92,93,247,234,186,210,18,87,215,150,150,144,150,88,157,91,229,33,29,169,123,159,202,63,149,123,234,62,167,242,79,229,158,186,175,169,123,154,186,159,169,188,83,121,167,238,91,42,239,212,189,74,221,159,212,189,73,229,155,186,39,169,124,83,247,34,149,115,138,123,42,207,108,197,107,217,90,127,183,108,173,245,122,46,114,116,110,116,110,116,78,204,83,204,83,204,83,121,166,152,167,242,76,229,153,98,158,98,158,98,158,202,55,197,188,196,188,148,111,137,119,41,231,82,190,165,103,178,244,60,150,114,46,229,92,202,185,244,204,149,158,183,82,206,165,156,75,172,75,172,75,172,75,172,75,172,75,185,151,88,151,114,46,113,46,113,46,113,46,113,46,229,95,226,92,226,92,226,92,98,86,235,57,117,200,174,124,74,252,74,175,82,41,175,214,187,212,202,173,197,179,245,76,180,222,165,86,158,173,119,169,149,107,235,93,106,229,219,98,220,202,185,245,140,180,242,110,177,110,229,222,122,86,90,249,183,158,151,150,134,214,51,211,210,209,122,110,90,90,90,247,160,165,167,117,31,90,154,90,207,80,75,87,235,253,105,105,107,221,147,150,190,214,251,211,210,216,186,63,45,157,173,123,212,210,218,122,127,90,122,91,247,170,165,185,245,254,180,238,89,235,158,181,244,183,222,161,22,131,214,59,212,226,208,122,135,90,44,90,247,178,197,163,75,235,196,164,75,235,196,165,117,111,91,108,90,247,183,197,167,117,143,91,207,98,235,62,183,158,199,214,189,110,61,147,173,251,221,122,46,91,247,188,245,108,182,238,123,235,249,108,221,251,214,189,111,61,167,173,251,223,122,86,91,207,64,235,121,109,61,7,173,231,181,245,44,172,56,173,114,95,229,190,233,223,161,35,117,200,166,220,87,185,175,114,95,229,190,202,125,149,251,42,247,85,238,171,220,87,185,175,114,95,229,190,202,125,149,251,42,247,85,238,171,220,87,185,175,114,95,229,190,202,125,149,251,42,247,85,238,171,220,87,185,175,114,95,229,190,202,125,149,247,142,119,80,157,87,174,171,92,247,250,111,173,215,243,186,122,70,86,207,199,122,151,101,143,245,6,251,118,215,183,181,190,125,245,109,172,222,89,255,206,219,130,189,196,27,235,223,120,39,158,247,203,123,241,216,99,222,110,108,183,177,219,216,237,218,205,219,235,223,181,199,181,199,181,199,181,199,181,199,125,27,184,61,174,61,214,30,107,143,181,199,218,99,237,177,246,88,123,172,61,246,237,249,111,211,247,174,239,236,95,125,120,5,226,85,136,87,34,94,141,120,69,226,85,9,202,4,117,194,30,175,82,188,82,241,106,197,43,22,175,90,188,114,241,234,133,11,198,171,22,231,243,186,207,75,62,91,63,27,194,134,176,33,108,8,27,194,134,180,33,95,17,178,33,109,72,27,202,134,178,161,95,105,178,161,109,24,27,204,244,24,231,49,201,99,136,175,60,29,163,59,166,118,238,171,100,54,24,211,49,161,99,56,199,92,206,190,250,230,226,102,16,159,25,124,150,255,89,249,103,209,159,245,126,150,250,89,224,247,170,161,94,219,227,90,119,92,220,142,43,219,113,89,59,174,105,199,5,237,184,154,29,151,50,13,54,88,140,171,216,113,9,59,174,95,199,5,236,184,130,29,151,176,227,26,118,92,196,142,171,216,113,25,59,174,97,162,52,30,174,7,157,243,254,175,225,120,248,60,120,137,159,146,176,222,240,83,226,146,160,193,30,86,30,126,74,194,242,93,35,52,216,195,79,73,24,132,107,198,113,209,208,96,15,35,73,63,37,105,46,174,36,26,194,67,122,40,15,237,97,60,92,15,246,240,83,226,50,163,193,30,166,230,138,163,161,254,141,247,128,241,6,48,126,251,53,140,135,213,176,54,172,13,107,195,218,160,12,102,116,113,13,225,161,60,140,7,27,142,13,199,6,71,158,99,195,177,225,179,225,179,225,179,225,179,225,179,33,108,8,27,194,134,176,33,108,72,27,210,134,180,33,109,72,27,202,134,178,161,108,40,27,202,134,182,161,109,104,27,218,134,182,97,108,24,27,198,134,177,97,108,176,242,177,242,177,242,177,242,177,242,177,242,177,242,177,242,177,242,177,242,107,229,215,202,175,149,95,43,191,86,126,173,252,90,249,181,242,107,229,215,202,175,149,95,43,191,86,126,173,252,90,249,85,25,209,96,171,10,137,6,47,81,41,209,224,117,150,127,45,255,230,251,211,110,150,127,45,255,90,254,181,252,107,249,215,242,175,229,95,203,191,150,127,45,255,90,254,181,252,107,249,215,242,175,229,95,203,191,150,127,45,255,90,254,181,252,107,249,215,242,175,229,95,203,191,150,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,45,127,85,45,53,248,79,213,75,13,62,167,170,51,46,59,227,186,51,46,60,227,202,50,46,45,227,218,50,46,46,227,234,50,46,47,227,186,49,46,28,227,202,49,46,29,227,218,49,46,30,227,234,161,193,30,215,191,238,251,101,95,75,221,107,95,235,221,181,175,68,223,63,189,91,215,245,67,195,231,33,60,164,135,210,160,253,84,195,120,184,30,86,195,103,143,207,30,159,61,62,123,132,127,197,251,101,223,176,111,216,55,236,27,246,13,251,166,127,165,127,149,163,148,163,148,125,203,190,101,223,178,111,217,183,236,91,246,40,123,180,61,218,30,237,117,237,117,237,117,237,117,237,117,237,117,227,117,227,117,215,191,238,251,229,107,92,95,227,218,247,218,247,218,247,218,119,253,107,223,47,71,209,141,191,174,76,215,149,233,186,50,93,87,166,235,138,115,93,113,174,43,206,117,197,185,174,56,215,197,230,186,216,92,109,148,26,194,190,97,95,115,57,70,226,18,115,79,250,87,190,95,94,167,103,92,47,143,23,27,196,177,192,211,239,151,221,218,23,178,84,23,27,13,246,176,212,51,190,218,248,106,22,120,172,205,37,70,175,150,206,165,129,185,35,214,16,30,228,225,230,246,150,21,185,173,85,123,230,70,43,189,227,123,188,111,116,251,246,185,225,74,239,255,30,221,196,249,147,197,227,91,63,111,253,188,245,110,167,202,31,16,30,251,141,243,198,251,198,103,125,109,94,188,70,47,104,245,94,179,23,175,221,139,215,240,197,107,249,226,53,125,241,218,62,127,120,104,236,231,219,207,183,159,111,63,223,126,190,253,124,251,249,246,243,237,231,219,207,215,237,96,191,102,185,95,187,220,175,97,238,215,50,247,107,154,251,181,205,253,26,231,126,173,115,191,230,185,95,251,220,175,129,238,215,66,247,107,162,251,181,209,253,26,233,126,173,116,191,102,186,95,59,221,175,161,238,215,82,247,107,170,251,181,213,253,26,235,126,173,117,191,230,186,95,123,221,175,193,238,215,98,247,107,178,251,181,217,253,26,237,126,173,118,191,102,187,95,187,221,175,225,238,215,114,247,107,186,187,95,179,178,222,62,223,84,76,205,244,179,93,166,215,109,220,252,99,58,76,31,83,48,17,37,137,146,68,73,162,36,81,146,40,69,148,34,74,17,165,136,82,68,41,162,20,81,138,40,69,148,34,202,197,118,177,93,108,116,69,119,185,2,237,209,93,174,176,132,166,83,186,139,59,45,211,93,220,95,59,169,125,237,143,233,48,125,76,193,148,76,197,212,76,52,94,175,193,220,253,35,202,33,202,33,10,32,23,144,11,200,5,228,2,114,1,185,128,92,64,46,32,23,144,11,200,5,228,2,114,1,185,128,92,64,46,32,23,144,11,200,5,228,2,114,1,233,143,140,55,17,165,137,210,68,1,228,2,114,1,185,251,179,17,250,215,116,66,112,233,62,93,16,222,244,49,5,83,49,53,211,48,93,38,252,14,126,175,75,213,132,251,193,221,173,151,39,162,36,182,196,150,216,242,103,227,10,201,21,146,43,36,87,40,174,80,92,161,136,82,68,41,162,20,81,138,40,69,148,34,74,17,165,137,210,68,105,162,52,81,154,40,77,148,38,74,19,101,177,45,182,197,182,63,27,87,248,245,239,16,60,52,242,7,144,7,144,239,227,198,83,49,53,211,48,93,38,162,192,243,192,243,192,243,192,243,192,243,192,243,125,244,120,34,202,33,10,255,43,59,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,240,60,77,148,38,202,16,101,136,2,207,223,247,208,7,207,223,135,209,7,207,223,23,210,7,207,223,167,210,7,207,223,55,211,7,79,62,158,212,176,16,5,158,31,60,249,156,210,68,20,120,126,240,252,224,201,119,150,38,162,124,68,249,136,242,17,229,35,10,60,249,174,250,251,224,201,7,214,223,7,79,190,180,254,62,120,242,201,245,247,193,147,111,175,191,15,158,124,132,253,125,240,228,107,76,19,81,224,249,193,147,239,51,77,68,129,231,7,207,15,158,223,16,101,136,50,68,153,23,37,224,25,240,12,120,198,223,207,214,76,195,116,153,222,21,2,158,1,207,128,103,192,51,224,25,240,12,120,6,60,3,158,1,207,128,103,192,51,224,25,240,140,143,40,31,81,62,162,124,68,129,103,192,51,224,25,245,179,113,5,120,6,60,3,158,1,207,128,103,192,51,224,25,240,12,120,6,60,3,158,1,207,128,103,192,51,224,25,240,140,31,207,33,202,16,101,136,50,47,74,194,51,225,153,240,76,120,38,60,19,158,9,207,132,103,194,51,225,153,240,76,120,38,60,19,158,9,207,132,103,194,51,225,153,240,76,120,38,60,19,158,249,17,229,35,74,16,37,136,2,207,132,103,194,51,225,153,240,76,120,38,60,19,158,9,207,132,103,194,51,225,153,240,76,120,38,60,19,158,9,207,132,103,194,51,225,153,240,204,31,207,75,148,75,148,75,148,203,255,78,96,86,48,43,152,21,204,10,102,5,179,130,89,193,172,96,86,48,43,152,21,204,10,102,5,179,130,89,193,172,96,86,48,171,32,74,16,37,136,18,68,9,162,4,81,130,40,137,123,226,78,137,44,74,100,81,34,139,18,89,192,42,96,21,176,106,126,54,66,3,171,128,85,192,42,96,21,176,10,88,245,131,117,137,114,137,114,137,114,137,114,137,114,137,178,68,89,162,44,81,150,40,148,200,162,68,22,37,178,216,203,139,189,188,217,203,155,189,188,217,123,154,189,167,33,216,16,108,8,118,252,108,201,84,76,205,52,76,151,137,43,0,178,1,217,128,108,64,54,32,27,144,77,109,108,106,99,83,27,155,218,216,236,229,205,94,222,236,229,205,94,222,236,61,205,166,211,108,58,205,75,210,188,36,205,75,210,188,36,13,193,134,96,67,176,33,216,16,108,8,54,4,27,130,13,193,166,201,104,64,54,32,7,144,3,200,1,228,0,114,216,196,231,247,255,67,54,157,97,211,25,54,157,97,211,25,54,157,97,211,25,54,157,225,205,25,222,156,225,205,25,222,156,225,205,25,222,156,129,224,64,112,32,56,16,28,8,14,4,7,130,3,193,129,224,176,123,15,32,7,144,3,200,1,228,0,114,0,57,236,54,195,110,51,236,54,195,110,51,236,54,195,110,51,236,54,195,110,51,236,54,195,155,51,188,57,195,155,51,188,57,195,155,51,51,255,251,63,139,154,22,223,189,28,0,0])))