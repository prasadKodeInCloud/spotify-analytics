import React from "react";
import ReactECharts from "echarts-for-react";

const PictorialBarChart: React.FC<{
  trackFeatures: SpotifyApi.AudioFeaturesResponse;
}> = ({ trackFeatures }) => {
  const symbols = [
    "path://M241.506 10.059 C 241.421 10.195,240.765 10.395,240.046 10.503 C 239.328 10.610,238.538 10.804,238.291 10.933 C 238.044 11.062,237.274 11.450,236.580 11.795 C 235.886 12.140,234.940 12.611,234.478 12.843 C 234.015 13.074,232.313 14.603,230.694 16.241 C 226.971 20.008,226.152 20.633,222.637 22.394 C 217.863 24.787,214.990 25.067,209.996 23.629 C 208.821 23.290,207.616 23.231,204.390 23.353 C 200.110 23.515,198.279 23.898,194.674 25.381 C 191.984 26.488,191.021 26.632,186.333 26.631 C 179.505 26.629,176.355 26.104,174.479 24.657 C 173.632 24.004,172.234 23.291,171.100 22.934 L 169.166 22.325 166.503 22.910 C 162.058 23.887,160.597 24.622,159.930 26.218 C 159.705 26.757,159.357 27.247,159.158 27.307 C 158.958 27.367,158.542 27.514,158.234 27.633 C 157.176 28.041,154.027 28.618,151.613 28.846 C 150.285 28.971,149.060 29.158,148.893 29.262 C 148.725 29.366,146.974 29.578,145.002 29.733 C 139.271 30.185,134.550 30.764,132.586 31.256 C 131.584 31.507,130.196 31.826,129.502 31.966 C 128.809 32.105,127.800 32.347,127.260 32.503 C 125.669 32.964,117.820 33.377,116.945 33.046 C 116.529 32.889,115.598 32.264,114.876 31.657 C 114.155 31.050,113.445 30.554,113.299 30.554 C 113.153 30.554,112.876 30.364,112.684 30.133 C 112.492 29.902,112.035 29.713,111.669 29.713 C 110.579 29.713,110.826 30.825,112.263 32.391 C 113.485 33.721,113.854 34.802,113.220 35.194 C 112.901 35.391,112.037 35.064,108.339 33.346 C 104.995 31.793,103.140 31.577,103.162 32.745 C 103.175 33.415,104.123 34.018,106.334 34.765 C 108.650 35.547,109.676 36.284,109.040 36.710 C 108.452 37.104,107.137 37.048,105.816 36.572 C 104.078 35.946,99.449 36.012,98.852 36.672 C 98.305 37.277,98.239 38.120,98.739 38.127 C 98.931 38.130,100.477 38.319,102.172 38.546 C 103.868 38.773,105.722 38.959,106.291 38.961 C 106.983 38.962,107.588 39.189,108.113 39.644 C 109.424 40.779,108.802 40.972,103.937 40.941 C 100.127 40.916,99.553 40.973,99.159 41.410 C 97.964 42.735,101.348 43.573,109.040 43.858 C 117.518 44.171,120.069 45.425,118.733 48.623 C 117.921 50.567,118.123 52.698,119.120 52.698 C 120.035 52.698,121.017 51.838,121.275 50.811 C 121.362 50.462,121.531 50.175,121.649 50.175 C 121.767 50.175,121.937 49.828,122.027 49.404 C 122.198 48.597,124.050 46.251,124.516 46.251 C 124.665 46.251,126.037 45.245,127.566 44.015 C 133.640 39.129,137.802 38.313,147.442 40.117 C 148.290 40.275,149.804 40.516,150.806 40.651 C 151.808 40.787,153.132 41.027,153.749 41.185 C 154.366 41.343,155.263 41.475,155.744 41.479 C 156.759 41.487,157.921 42.311,158.438 43.389 C 159.282 45.149,167.481 46.307,170.619 45.109 C 171.807 44.655,176.281 45.368,179.818 46.573 C 180.280 46.731,180.911 46.924,181.219 47.004 C 181.528 47.083,182.177 47.324,182.663 47.540 C 183.149 47.756,183.752 47.933,184.004 47.933 C 185.809 47.933,184.252 50.080,181.640 51.191 C 181.409 51.290,180.196 51.858,178.945 52.455 C 176.392 53.672,176.026 53.731,175.034 53.081 C 172.893 51.677,168.134 53.610,167.828 56.007 C 167.630 57.558,166.956 58.173,163.808 59.680 C 162.438 60.336,161.128 60.989,160.897 61.131 C 160.666 61.274,160.287 61.462,160.056 61.550 C 159.825 61.637,159.446 61.820,159.215 61.956 C 157.969 62.692,153.755 64.751,153.494 64.753 C 153.326 64.754,152.810 64.956,152.348 65.202 C 151.059 65.888,147.561 65.866,146.336 65.164 C 144.136 63.904,140.172 59.941,139.333 58.164 C 138.375 56.134,137.912 55.000,137.912 54.688 C 137.912 54.518,137.659 54.380,137.351 54.380 C 136.743 54.380,136.515 55.858,137.071 56.202 C 137.225 56.297,137.351 56.565,137.351 56.797 C 137.351 57.029,137.672 57.920,138.064 58.777 C 138.732 60.238,138.747 60.368,138.310 60.851 C 137.624 61.609,136.821 61.097,132.969 57.440 C 129.756 54.390,128.890 53.910,128.721 55.085 C 128.643 55.625,131.204 58.531,133.287 60.266 C 134.126 60.966,134.828 62.180,134.828 62.933 C 134.828 63.511,133.730 64.045,133.341 63.656 C 133.172 63.488,132.795 63.350,132.503 63.350 C 131.915 63.350,130.717 62.736,129.222 61.668 C 127.869 60.701,127.170 60.329,125.862 59.878 L 124.737 59.491 124.737 60.233 C 124.737 60.903,126.190 62.183,127.960 63.070 C 130.403 64.296,132.866 66.481,132.866 67.421 C 132.866 69.136,130.625 69.349,125.578 68.112 C 123.448 67.590,123.196 67.617,123.196 68.365 C 123.196 68.733,123.385 69.124,123.616 69.232 C 123.847 69.341,124.319 69.575,124.663 69.753 C 125.008 69.931,125.558 70.077,125.885 70.077 C 126.563 70.077,129.807 70.760,131.885 71.341 C 132.656 71.556,133.602 71.788,133.987 71.857 C 138.647 72.690,141.355 75.544,139.465 77.632 C 139.228 77.895,139.033 78.262,139.033 78.448 C 139.033 78.634,138.858 79.066,138.643 79.407 C 137.485 81.254,137.453 84.388,138.591 84.608 C 139.203 84.727,140.434 83.608,140.434 82.932 C 140.434 82.443,140.889 81.268,141.807 79.385 C 142.392 78.183,143.628 77.040,145.200 76.247 C 145.893 75.896,146.796 75.437,147.205 75.226 C 147.614 75.015,148.188 74.842,148.481 74.842 C 148.773 74.842,149.132 74.726,149.278 74.584 C 149.633 74.239,152.099 73.737,154.934 73.434 C 156.202 73.298,157.487 73.055,157.789 72.894 C 158.090 72.732,158.728 72.600,159.206 72.600 C 159.683 72.600,160.527 72.411,161.080 72.179 C 161.634 71.948,162.481 71.758,162.963 71.756 C 163.446 71.754,164.408 71.582,165.102 71.372 C 167.753 70.572,171.126 70.509,171.815 71.246 C 172.997 72.511,175.771 72.124,178.565 70.304 C 180.944 68.755,181.426 68.653,182.311 69.516 C 182.793 69.986,182.812 70.187,182.521 71.667 C 182.311 72.741,182.157 79.306,182.074 90.820 C 182.005 100.456,181.860 109.688,181.753 111.337 C 181.414 116.570,181.626 116.730,188.533 116.447 C 195.889 116.147,196.037 116.229,196.519 120.924 C 196.644 122.142,196.880 123.271,197.042 123.433 C 197.204 123.595,197.337 123.994,197.337 124.319 C 197.337 124.644,197.522 125.155,197.749 125.454 C 197.975 125.754,198.172 126.188,198.186 126.419 C 198.227 127.097,200.709 131.745,201.031 131.745 C 201.158 131.745,201.261 131.925,201.261 132.145 C 201.261 132.366,201.424 132.712,201.622 132.916 C 201.820 133.120,202.419 133.915,202.953 134.683 C 203.893 136.034,206.076 138.287,210.700 142.677 C 211.918 143.833,213.163 145.095,213.465 145.481 C 213.768 145.867,214.425 146.705,214.926 147.343 C 215.427 147.982,215.837 148.643,215.837 148.814 C 215.837 148.985,215.935 149.124,216.054 149.124 C 216.513 149.124,217.252 151.078,218.069 154.450 C 218.199 154.989,218.580 156.125,218.915 156.973 C 219.250 157.821,219.623 158.830,219.744 159.215 C 220.075 160.265,221.439 163.776,221.715 164.288 C 221.847 164.535,222.420 165.859,222.988 167.232 C 223.555 168.604,224.340 170.420,224.731 171.268 C 225.123 172.116,225.634 173.252,225.867 173.791 C 226.100 174.331,226.383 174.966,226.496 175.203 C 226.608 175.441,226.793 176.198,226.907 176.885 C 227.020 177.573,227.245 178.299,227.406 178.498 C 227.877 179.081,227.820 182.301,227.330 182.840 C 226.881 183.333,226.709 183.546,225.690 184.863 C 225.332 185.326,223.820 186.968,222.330 188.513 C 216.874 194.171,211.548 200.523,209.701 203.574 C 209.351 204.152,208.948 204.625,208.807 204.625 C 208.665 204.625,208.549 204.752,208.549 204.908 C 208.549 205.518,201.954 212.339,199.192 214.585 C 198.440 215.197,197.431 216.042,196.950 216.464 C 196.469 216.885,195.990 217.232,195.885 217.234 C 195.781 217.237,195.529 217.405,195.325 217.609 C 194.484 218.449,190.253 221.444,189.907 221.444 C 189.330 221.444,187.856 222.368,187.677 222.841 C 186.603 225.690,185.012 226.206,181.330 224.903 C 177.934 223.700,176.083 226.167,175.724 232.376 C 175.456 237.014,174.416 243.019,173.762 243.714 C 173.624 243.861,173.511 244.246,173.511 244.572 C 173.511 244.897,173.326 245.407,173.099 245.707 C 172.873 246.006,172.684 246.454,172.679 246.702 C 172.660 247.669,169.817 252.287,168.318 253.787 C 167.550 254.554,165.382 257.581,165.382 257.884 C 165.382 258.038,165.266 258.164,165.124 258.164 C 164.982 258.164,164.778 258.574,164.671 259.075 C 164.564 259.576,164.341 260.154,164.175 260.359 C 163.523 261.167,163.573 266.958,164.244 268.301 C 166.016 271.850,169.647 271.383,171.533 267.363 C 172.017 266.333,172.828 265.135,173.336 264.700 C 175.335 262.990,175.763 262.649,175.914 262.649 C 176.001 262.649,176.473 262.346,176.963 261.976 C 177.695 261.424,179.979 260.119,182.200 258.985 C 182.432 258.866,183.895 258.003,185.453 257.065 C 187.011 256.128,188.478 255.361,188.712 255.361 C 188.947 255.361,189.297 255.172,189.488 254.940 C 189.680 254.709,189.984 254.520,190.163 254.520 C 190.744 254.520,191.451 252.925,191.451 251.613 C 191.451 250.486,191.857 249.124,192.591 247.793 C 192.719 247.561,193.096 246.868,193.429 246.251 C 195.173 243.025,196.462 242.707,198.833 244.919 C 201.770 247.659,202.800 247.818,205.606 245.965 C 207.872 244.469,214.258 238.079,217.375 234.188 C 218.606 232.652,219.678 231.331,219.758 231.254 C 219.837 231.177,220.404 230.484,221.018 229.713 C 221.632 228.942,222.232 228.269,222.350 228.218 C 222.468 228.166,222.565 228.010,222.565 227.871 C 222.565 227.642,223.038 226.985,223.836 226.107 C 224.410 225.476,227.245 221.574,227.429 221.163 C 227.532 220.932,227.866 220.364,228.170 219.902 C 228.474 219.439,228.851 218.809,229.007 218.500 C 229.438 217.650,229.840 217.052,231.731 214.447 C 233.655 211.796,235.524 209.905,240.002 206.074 C 245.945 200.992,250.925 194.489,251.525 191.030 C 251.605 190.568,251.804 189.685,251.967 189.068 C 252.349 187.624,252.344 176.846,251.961 175.193 C 251.800 174.499,251.573 173.111,251.458 172.109 C 251.343 171.107,251.107 169.720,250.935 169.026 C 250.762 168.332,250.411 166.755,250.155 165.522 C 249.898 164.289,249.565 162.964,249.414 162.579 C 249.263 162.193,249.034 161.310,248.904 160.617 C 248.649 159.256,248.120 157.175,247.799 156.272 C 247.348 155.002,246.711 152.850,246.536 152.000 C 246.432 151.501,246.231 151.021,246.089 150.933 C 245.947 150.845,245.830 150.515,245.830 150.201 C 245.830 149.887,245.662 149.232,245.456 148.746 C 244.976 147.613,244.420 146.056,244.240 145.340 C 244.115 144.845,243.641 143.694,243.022 142.387 C 242.910 142.151,242.723 141.525,242.607 140.995 C 242.491 140.466,242.297 139.839,242.177 139.603 C 240.846 136.984,239.561 127.570,240.353 126.242 C 240.803 125.487,243.471 123.616,244.097 123.616 C 244.254 123.616,244.424 123.517,244.476 123.396 C 244.613 123.071,255.821 117.662,259.706 116.046 C 260.014 115.917,261.118 115.424,262.159 114.949 C 263.200 114.474,264.216 114.085,264.416 114.085 C 264.616 114.085,264.899 113.972,265.046 113.834 C 265.192 113.696,266.006 113.303,266.854 112.960 C 267.701 112.617,268.808 112.155,269.313 111.933 C 271.761 110.857,272.613 113.198,273.310 122.915 C 273.465 125.074,273.710 127.786,273.854 128.942 C 274.192 131.647,274.180 141.792,273.837 143.798 C 273.691 144.646,273.389 146.854,273.165 148.704 C 272.234 156.388,271.819 157.284,267.516 160.903 C 264.411 163.515,264.616 166.695,268.026 168.796 C 268.606 169.154,269.084 169.541,269.088 169.657 C 269.093 169.772,269.218 169.867,269.368 169.867 C 270.962 169.867,278.066 176.499,278.066 177.987 C 278.066 178.121,278.276 178.651,278.534 179.164 C 279.353 180.799,279.425 180.990,279.620 182.029 C 279.725 182.589,279.923 183.117,280.060 183.201 C 280.196 183.286,280.308 183.612,280.308 183.927 C 280.308 185.179,282.073 188.531,283.952 190.849 C 284.800 191.895,285.936 193.300,286.475 193.973 C 290.718 199.261,292.302 200.423,295.250 200.416 C 297.679 200.410,298.528 199.507,298.528 196.931 C 298.528 195.783,297.161 192.168,296.561 191.731 C 296.455 191.654,296.167 191.149,295.919 190.610 C 294.450 187.402,294.138 184.701,294.608 179.257 C 294.780 177.253,295.024 174.036,295.149 172.109 C 295.274 170.182,295.474 167.994,295.593 167.246 C 295.841 165.688,295.602 165.393,294.088 165.386 C 292.193 165.378,291.358 162.508,292.639 160.406 L 293.194 159.495 296.388 159.495 C 301.448 159.495,302.686 158.664,301.762 155.883 C 301.502 155.099,301.172 154.384,301.030 154.296 C 300.887 154.208,300.771 153.854,300.771 153.508 C 300.771 153.163,300.647 152.757,300.496 152.605 C 300.345 152.454,300.079 148.992,299.904 144.911 C 299.619 138.249,299.581 133.667,299.671 116.258 C 299.704 109.881,299.251 101.030,298.839 99.982 C 298.668 99.548,298.527 98.539,298.525 97.739 C 298.523 96.940,298.336 95.592,298.108 94.744 C 297.880 93.896,297.693 92.745,297.691 92.186 C 297.689 91.626,297.498 90.716,297.267 90.162 C 297.036 89.609,296.847 88.902,296.847 88.591 C 296.847 86.173,293.450 83.235,289.254 82.022 C 287.365 81.477,271.638 81.358,269.064 81.870 C 268.234 82.035,266.608 82.274,265.452 82.399 C 263.179 82.647,260.781 83.053,257.844 83.689 C 256.819 83.911,255.518 84.093,254.952 84.093 C 254.386 84.093,253.706 84.208,253.442 84.350 C 253.178 84.491,252.082 84.743,251.008 84.909 C 249.933 85.075,248.326 85.351,247.436 85.522 C 245.509 85.892,245.113 85.677,244.904 84.152 C 244.825 83.580,244.610 82.544,244.426 81.850 C 244.242 81.156,243.923 79.958,243.717 79.187 C 243.510 78.416,243.214 77.281,243.058 76.664 C 242.902 76.048,242.566 74.786,242.312 73.861 C 242.058 72.936,241.660 71.486,241.428 70.638 C 240.796 68.325,240.335 66.732,239.834 65.134 C 239.586 64.343,239.379 63.460,239.374 63.172 C 239.370 62.884,239.180 62.404,238.954 62.105 C 238.728 61.806,238.542 61.285,238.542 60.948 C 238.542 60.611,238.353 60.178,238.122 59.986 C 237.891 59.794,237.701 59.400,237.701 59.111 C 237.701 58.821,237.604 58.584,237.485 58.584 C 237.256 58.584,236.693 57.533,235.873 55.574 C 235.248 54.079,235.555 52.607,236.521 52.468 C 236.883 52.416,237.211 52.555,237.306 52.801 C 237.566 53.479,238.903 53.614,240.203 53.094 C 241.082 52.742,241.463 52.703,241.700 52.941 C 242.199 53.439,243.138 53.314,243.523 52.698 C 243.757 52.323,244.177 52.137,244.790 52.137 C 245.653 52.137,245.938 51.925,246.670 50.738 C 246.896 50.373,247.031 50.381,247.754 50.809 C 248.984 51.535,249.311 51.430,250.596 49.895 L 251.769 48.493 254.003 48.493 C 258.876 48.493,260.037 47.092,260.973 40.084 C 261.107 39.082,261.350 37.583,261.512 36.752 C 261.879 34.879,261.876 30.835,261.506 29.152 C 261.354 28.458,261.164 27.323,261.085 26.629 C 260.891 24.924,260.213 22.601,259.000 19.481 C 257.596 15.870,254.345 11.212,253.228 11.212 C 253.014 11.212,252.838 11.086,252.838 10.932 C 252.838 10.778,252.554 10.651,252.207 10.650 C 251.861 10.649,251.215 10.460,250.774 10.230 C 249.869 9.758,241.784 9.609,241.506 10.059",

    "path://M244.958 19.037 C 244.650 19.175,244.055 19.297,243.637 19.308 C 242.933 19.326,241.331 19.897,240.336 20.484 C 240.105 20.620,239.727 20.817,239.496 20.920 C 237.262 21.921,231.414 27.901,230.234 30.390 L 229.702 31.513 230.652 32.311 L 231.602 33.110 230.604 35.112 C 230.055 36.214,229.499 37.334,229.369 37.601 C 229.238 37.869,229.131 38.310,229.130 38.582 C 229.129 38.853,228.940 39.437,228.710 39.878 C 228.480 40.319,228.291 40.825,228.291 41.003 C 228.291 42.653,224.833 46.303,221.770 47.886 C 216.813 50.447,215.814 52.267,218.194 54.403 C 218.803 54.950,219.384 55.728,219.485 56.132 C 219.587 56.537,219.773 56.932,219.900 57.010 C 220.026 57.088,219.950 57.497,219.731 57.918 C 219.511 58.339,219.330 58.884,219.329 59.130 C 219.329 59.376,218.792 60.107,218.137 60.756 C 216.483 62.394,216.587 68.067,218.271 68.067 C 219.020 68.067,217.654 69.717,216.888 69.739 C 216.373 69.753,214.581 70.697,214.573 70.958 C 214.569 71.085,214.377 71.378,214.146 71.609 C 213.479 72.276,213.647 73.565,214.566 74.834 C 215.668 76.356,215.631 76.757,214.216 78.631 C 211.704 81.958,212.557 87.726,215.885 89.913 C 216.469 90.297,217.010 90.675,217.087 90.754 C 217.363 91.035,222.869 93.557,223.207 93.557 C 223.440 93.557,224.885 94.183,225.837 94.696 C 226.104 94.840,226.463 94.958,226.635 94.958 C 226.806 94.958,227.343 95.130,227.829 95.340 C 228.314 95.550,229.279 95.942,229.972 96.211 C 238.017 99.331,241.712 105.184,242.647 116.292 C 243.064 121.238,242.364 122.348,235.292 127.963 C 233.675 129.246,232.101 130.509,231.793 130.770 C 231.485 131.031,230.161 132.053,228.852 133.042 C 227.542 134.031,225.651 135.626,224.650 136.586 C 223.648 137.546,222.452 138.625,221.992 138.984 C 221.531 139.342,220.954 139.825,220.709 140.056 C 220.134 140.599,219.212 141.358,217.647 142.577 C 216.955 143.116,216.136 143.767,215.827 144.023 C 214.158 145.407,211.469 147.533,210.922 147.899 C 210.578 148.130,210.153 148.447,209.980 148.603 C 208.974 149.508,207.299 150.700,207.033 150.700 C 206.862 150.700,206.723 150.814,206.723 150.954 C 206.723 151.293,201.734 154.622,201.224 154.622 C 201.003 154.622,200.740 154.401,200.640 154.132 C 200.329 153.300,196.063 146.472,195.520 145.938 C 195.123 145.547,194.118 143.966,194.118 143.732 C 194.118 143.585,194.019 143.422,193.898 143.371 C 193.636 143.259,191.036 139.888,191.036 139.659 C 191.036 139.572,190.756 139.177,190.413 138.783 C 189.385 137.600,185.608 130.355,184.287 127.031 C 184.164 126.723,183.822 125.903,183.526 125.210 C 183.231 124.517,182.762 123.319,182.484 122.549 C 182.207 121.779,181.875 121.029,181.746 120.882 C 181.618 120.736,181.512 120.421,181.511 120.182 C 181.510 119.943,181.321 119.387,181.091 118.946 C 180.861 118.504,180.672 117.931,180.672 117.671 C 180.672 117.411,180.553 117.079,180.408 116.933 C 180.263 116.786,180.022 116.162,179.873 115.546 C 179.605 114.442,179.131 113.002,178.675 111.905 C 178.546 111.597,178.302 110.777,178.132 110.084 C 177.962 109.391,177.632 108.067,177.399 107.143 C 176.472 103.464,176.180 97.924,176.756 94.958 C 176.921 94.111,177.183 92.661,177.338 91.737 C 177.493 90.812,177.698 89.867,177.794 89.636 C 177.948 89.266,178.154 88.182,178.941 83.613 C 179.156 82.366,178.910 82.425,183.053 82.632 C 187.698 82.864,192.717 78.666,192.717 74.548 C 192.717 73.957,192.859 73.066,193.032 72.570 C 193.265 71.901,193.265 71.584,193.032 71.351 C 192.859 71.178,192.717 70.432,192.717 69.693 C 192.717 67.571,189.730 61.905,188.612 61.905 C 188.420 61.905,188.162 61.747,188.039 61.555 C 187.339 60.460,183.658 59.932,181.569 60.626 C 179.061 61.459,178.281 61.330,176.863 59.850 C 175.502 58.430,174.314 58.137,173.233 58.955 C 172.618 59.420,170.684 59.529,170.542 59.106 C 170.301 58.393,165.605 57.687,164.904 58.259 C 162.490 60.227,162.470 60.230,159.444 58.937 C 157.486 58.100,154.622 59.143,154.622 60.693 C 154.622 60.860,154.433 61.153,154.202 61.345 C 153.971 61.536,153.782 61.908,153.782 62.170 C 153.782 62.433,153.498 62.909,153.151 63.228 L 152.521 63.809 150.560 62.869 C 146.468 60.906,144.064 62.831,144.606 67.639 C 144.682 68.308,144.645 69.014,144.525 69.208 C 144.221 69.701,140.761 70.572,139.074 70.581 C 138.302 70.585,137.231 70.717,136.693 70.874 C 136.155 71.031,134.391 71.284,132.773 71.436 C 126.530 72.024,123.363 72.456,122.689 72.812 C 121.590 73.392,121.008 73.992,121.008 74.548 C 121.008 75.103,119.176 76.190,118.241 76.190 C 117.939 76.190,117.336 76.364,116.899 76.576 C 116.463 76.789,115.665 77.152,115.126 77.383 C 113.657 78.015,110.244 79.672,110.084 79.832 C 110.007 79.909,109.337 80.287,108.595 80.672 C 107.853 81.057,107.034 81.562,106.774 81.793 C 106.515 82.024,105.557 82.717,104.646 83.333 C 102.689 84.657,102.492 84.813,99.580 87.343 C 96.565 89.963,93.521 92.975,91.317 95.518 C 90.315 96.673,89.351 97.772,89.174 97.960 C 88.998 98.148,88.249 99.125,87.510 100.131 C 86.771 101.138,86.065 101.961,85.940 101.961 C 85.816 101.961,85.714 102.139,85.714 102.358 C 85.714 102.576,85.614 102.796,85.491 102.848 C 85.244 102.951,80.943 109.433,79.692 111.587 C 78.582 113.498,77.562 115.422,76.107 118.347 C 74.809 120.959,73.842 123.098,72.501 126.331 C 72.341 126.716,72.045 127.409,71.844 127.871 C 71.643 128.333,71.415 128.964,71.337 129.272 C 71.259 129.580,70.920 130.525,70.584 131.373 C 70.247 132.220,69.912 133.228,69.839 133.613 C 69.766 133.999,69.605 134.566,69.482 134.874 C 68.952 136.201,68.059 139.406,68.063 139.969 C 68.065 140.307,67.958 140.651,67.824 140.733 C 67.690 140.816,67.493 141.545,67.386 142.354 C 67.279 143.162,67.090 143.953,66.967 144.111 C 66.844 144.269,66.662 145.212,66.563 146.206 C 66.464 147.201,66.258 148.140,66.105 148.293 C 65.952 148.446,65.825 149.145,65.824 149.846 C 65.823 150.547,65.636 152.507,65.409 154.202 C 64.884 158.128,64.881 164.326,65.403 167.927 C 65.626 169.468,65.813 171.428,65.817 172.283 C 65.822 173.138,65.948 173.959,66.096 174.107 C 66.245 174.256,66.444 175.132,66.540 176.054 C 66.635 176.976,66.789 177.920,66.881 178.151 C 66.974 178.382,67.201 179.265,67.386 180.112 C 67.572 180.959,67.932 182.346,68.187 183.193 C 68.442 184.041,68.760 185.112,68.894 185.574 C 69.315 187.021,69.795 188.345,70.199 189.168 C 70.413 189.605,70.588 190.130,70.588 190.336 C 70.588 190.542,70.766 191.068,70.984 191.504 C 71.202 191.940,71.568 192.738,71.797 193.277 C 72.654 195.290,76.257 202.397,76.637 202.823 C 76.853 203.066,77.031 203.365,77.031 203.487 C 77.031 204.034,83.112 212.674,85.235 215.146 C 85.576 215.542,86.359 216.483,86.975 217.237 C 88.344 218.913,93.903 224.476,95.360 225.630 C 95.944 226.092,96.691 226.699,97.020 226.978 C 98.492 228.225,98.821 228.479,99.967 229.262 C 102.798 231.193,106.990 233.209,109.804 233.991 C 110.651 234.227,111.849 234.559,112.465 234.730 C 115.991 235.705,125.665 235.726,128.711 234.764 C 129.174 234.618,130.213 234.414,131.022 234.310 C 131.831 234.206,132.563 234.007,132.649 233.867 C 132.736 233.728,133.065 233.613,133.382 233.613 C 133.972 233.613,136.173 232.957,137.675 232.333 C 138.137 232.141,139.083 231.768,139.776 231.503 C 143.036 230.258,152.195 225.759,152.661 225.174 C 152.913 224.857,156.838 223.279,157.845 223.090 C 158.387 222.989,158.899 222.794,158.983 222.657 C 159.068 222.521,159.539 222.406,160.031 222.403 C 160.522 222.400,161.718 222.231,162.689 222.028 C 163.925 221.769,164.928 221.732,166.037 221.906 C 168.415 222.279,169.129 223.077,167.377 223.406 C 166.843 223.506,166.261 223.764,166.082 223.979 C 165.904 224.194,165.595 224.370,165.396 224.370 C 164.783 224.370,162.769 226.898,162.581 227.903 C 162.101 230.457,163.095 231.916,165.461 232.131 L 167.162 232.285 167.296 233.471 C 167.517 235.435,169.206 236.415,172.370 236.415 L 173.624 236.415 173.946 237.745 C 175.662 244.843,176.763 258.456,176.755 272.479 L 176.751 280.112 178.151 280.112 L 179.552 280.112 179.546 272.899 C 179.540 265.688,178.922 253.202,178.440 250.560 C 178.300 249.790,178.177 248.380,178.168 247.427 C 178.159 246.474,178.016 245.340,177.850 244.906 C 176.664 241.803,177.299 238.598,178.925 239.479 C 181.483 240.866,191.156 241.938,198.257 241.621 C 202.429 241.435,202.484 241.451,208.896 244.825 C 212.082 246.501,212.658 246.796,214.419 247.646 C 220.390 250.531,222.781 253.736,222.749 258.811 C 222.739 260.282,222.582 261.863,222.399 262.325 C 221.898 263.592,220.545 268.870,220.173 271.008 C 220.039 271.779,219.787 273.039,219.611 273.810 C 218.811 277.334,218.487 278.976,218.487 279.522 L 218.487 280.112 267.927 280.112 C 307.303 280.112,317.363 280.041,317.346 279.762 C 317.335 279.569,317.083 279.034,316.787 278.571 C 316.491 278.109,316.109 277.384,315.940 276.961 C 315.770 276.537,315.542 276.190,315.433 276.190 C 315.323 276.190,315.000 275.655,314.714 275.000 C 314.428 274.345,313.908 273.431,313.559 272.968 C 313.209 272.505,312.787 271.812,312.620 271.427 C 312.453 271.043,312.065 270.350,311.757 269.888 C 311.450 269.426,311.122 268.827,311.028 268.557 C 310.935 268.288,310.756 268.067,310.630 268.067 C 310.505 268.067,310.319 267.808,310.219 267.490 C 310.118 267.173,309.438 265.944,308.708 264.759 C 307.978 263.574,307.075 262.039,306.702 261.346 C 306.328 260.654,305.922 259.960,305.799 259.806 C 305.244 259.106,303.722 256.114,302.693 253.702 C 301.527 250.968,302.258 248.355,304.287 248.005 C 305.125 247.861,306.970 247.101,307.283 246.771 C 307.360 246.690,307.990 246.196,308.683 245.672 C 309.377 245.149,310.070 244.579,310.224 244.406 C 312.322 242.051,314.215 242.851,314.454 246.193 C 314.583 247.992,314.680 248.136,315.356 247.524 C 315.639 247.268,315.951 247.059,316.049 247.059 C 316.409 247.059,318.262 245.012,318.802 244.019 C 319.107 243.457,319.459 242.808,319.585 242.577 C 320.118 241.596,320.519 240.071,320.727 238.235 C 321.679 229.828,321.805 229.330,323.340 227.941 C 325.836 225.682,327.294 227.938,327.232 233.964 C 327.197 237.400,327.473 238.533,327.881 236.625 C 327.988 236.124,328.211 235.547,328.376 235.343 C 328.773 234.851,328.765 226.205,328.368 225.712 C 328.207 225.513,327.985 224.909,327.873 224.370 C 327.761 223.831,327.368 222.988,327.000 222.498 C 326.632 222.007,326.331 221.472,326.331 221.307 C 326.331 221.143,326.232 221.008,326.111 221.008 C 325.990 221.008,325.686 220.662,325.435 220.238 C 325.184 219.814,324.718 219.153,324.400 218.768 C 324.081 218.382,323.709 217.934,323.574 217.771 C 321.306 215.039,322.140 213.310,325.043 214.728 C 326.947 215.659,330.103 214.424,333.269 211.509 L 334.185 210.666 331.529 210.694 C 329.503 210.716,328.707 210.614,328.172 210.264 C 327.786 210.011,327.341 209.804,327.183 209.804 C 326.179 209.804,322.129 204.892,322.129 203.675 C 322.129 203.502,322.003 203.361,321.849 203.361 C 321.695 203.361,321.569 203.223,321.569 203.054 C 321.569 202.884,321.369 202.286,321.125 201.723 C 320.881 201.161,320.503 200.286,320.285 199.780 C 320.067 199.274,319.888 198.648,319.888 198.389 C 319.888 198.130,319.714 197.409,319.502 196.788 C 317.259 190.223,317.309 178.415,319.592 175.492 C 319.714 175.337,319.880 174.895,319.963 174.510 C 320.145 173.659,321.462 170.055,321.808 169.459 C 321.945 169.222,322.146 168.625,322.255 168.131 C 322.363 167.637,322.568 167.161,322.711 167.074 C 322.853 166.986,322.970 166.638,322.971 166.300 C 322.972 165.962,323.149 165.348,323.365 164.935 C 323.580 164.522,323.841 163.798,323.945 163.327 C 324.048 162.857,324.249 162.400,324.391 162.312 C 324.534 162.224,324.654 161.750,324.659 161.258 C 324.664 160.766,324.853 160.119,325.079 159.820 C 325.305 159.521,325.495 158.954,325.500 158.560 C 325.506 158.166,325.690 157.528,325.910 157.143 C 326.131 156.758,326.315 156.040,326.321 155.549 C 326.326 155.057,326.449 154.582,326.594 154.492 C 326.740 154.402,326.938 153.733,327.036 153.005 C 327.133 152.276,327.289 151.492,327.382 151.261 C 328.228 149.164,329.008 135.464,328.329 134.636 C 328.184 134.459,327.975 133.587,327.865 132.699 C 327.756 131.811,327.554 131.016,327.418 130.932 C 327.282 130.848,327.171 130.482,327.171 130.118 C 327.171 129.396,325.622 126.173,324.207 123.950 C 323.337 122.582,322.909 122.084,319.640 118.627 C 318.766 117.703,317.700 116.190,317.271 115.266 C 316.842 114.342,316.382 113.380,316.248 113.130 C 316.114 112.879,315.919 112.216,315.814 111.656 C 315.709 111.096,315.511 110.569,315.374 110.485 C 315.238 110.400,315.126 110.072,315.126 109.755 C 315.126 109.438,314.946 108.595,314.725 107.881 C 313.909 105.236,313.536 103.428,312.870 98.880 C 312.700 97.724,312.443 96.338,312.298 95.798 C 312.153 95.259,311.915 93.620,311.769 92.157 C 311.378 88.236,310.933 84.641,310.642 83.053 C 310.383 81.639,309.985 78.645,309.542 74.790 C 309.410 73.634,309.162 72.249,308.992 71.711 C 308.822 71.172,308.683 70.214,308.683 69.581 C 308.683 68.949,308.556 68.065,308.401 67.619 C 308.245 67.172,308.005 65.987,307.868 64.986 C 307.487 62.211,307.000 59.670,306.560 58.161 C 306.341 57.412,306.162 56.316,306.162 55.727 C 306.162 55.137,306.051 54.586,305.915 54.502 C 305.779 54.418,305.577 53.623,305.467 52.735 C 305.356 51.847,305.185 50.994,305.085 50.840 C 304.874 50.514,304.272 48.034,303.964 46.218 C 303.846 45.525,303.599 44.683,303.415 44.346 C 303.232 44.010,303.081 43.478,303.081 43.165 C 303.081 42.852,302.905 42.182,302.689 41.676 C 302.474 41.170,302.083 40.189,301.820 39.496 C 301.558 38.803,301.229 38.046,301.090 37.815 C 300.951 37.584,300.759 37.206,300.665 36.975 C 298.404 31.454,293.301 25.772,288.095 22.981 C 285.107 21.378,284.298 21.008,283.784 21.008 C 283.518 21.008,283.056 20.823,282.757 20.597 C 282.458 20.371,281.858 20.182,281.424 20.177 C 280.990 20.172,280.363 20.023,280.031 19.845 C 277.815 18.659,266.485 18.663,261.345 19.852 C 259.703 20.232,255.031 20.249,253.780 19.879 C 251.235 19.128,245.891 18.618,244.958 19.037 M131.373 78.747 C 135.301 78.713,140.413 78.610,142.733 78.519 C 148.756 78.283,148.628 78.129,149.035 86.134 C 149.419 93.713,150.119 98.541,151.109 100.439 C 151.344 100.891,151.538 101.368,151.539 101.500 C 151.540 101.693,154.733 106.245,155.709 107.444 C 155.843 107.610,156.040 108.052,156.146 108.425 C 156.251 108.798,156.447 109.356,156.580 109.664 C 156.921 110.451,157.884 113.876,158.233 115.546 C 158.395 116.317,158.669 117.514,158.843 118.207 C 159.018 118.901,159.253 120.161,159.367 121.008 C 159.482 121.856,159.721 122.904,159.899 123.338 C 160.078 123.771,160.224 124.693,160.224 125.387 C 160.224 126.080,160.350 126.883,160.504 127.170 C 160.658 127.458,160.906 128.615,161.055 129.743 C 161.549 133.482,162.276 137.519,163.286 142.140 C 163.452 142.901,163.903 144.435,164.287 145.549 C 164.672 146.662,164.990 147.867,164.996 148.226 C 165.001 148.586,165.186 149.195,165.406 149.580 C 165.626 149.965,165.811 150.619,165.816 151.034 C 165.822 151.448,165.941 151.859,166.082 151.946 C 166.223 152.033,166.425 152.618,166.531 153.246 C 166.637 153.874,166.899 154.724,167.114 155.135 C 167.328 155.546,167.504 156.096,167.505 156.356 C 167.506 156.617,167.633 156.908,167.787 157.003 C 167.941 157.098,168.067 157.410,168.067 157.696 C 168.067 158.228,169.802 163.058,170.307 163.932 C 170.462 164.199,170.588 164.537,170.588 164.683 C 170.588 164.828,170.966 165.764,171.429 166.762 C 171.891 167.761,172.269 168.650,172.269 168.739 C 172.269 169.060,174.074 171.864,174.634 172.413 C 176.457 174.199,180.314 180.842,183.169 187.111 C 183.413 187.647,183.771 188.255,183.964 188.461 C 184.156 188.667,184.314 188.932,184.314 189.050 C 184.314 189.440,187.382 190.776,189.553 191.331 C 193.889 192.440,203.015 192.032,206.345 190.581 C 206.830 190.369,207.359 190.196,207.521 190.196 C 207.682 190.196,208.406 189.881,209.131 189.496 C 209.855 189.111,210.552 188.796,210.681 188.796 C 210.809 188.796,212.019 188.281,213.370 187.652 C 218.798 185.126,219.568 184.816,219.909 185.027 C 220.467 185.372,220.109 186.472,219.048 187.675 C 218.437 188.368,217.463 189.629,216.885 190.476 C 216.307 191.324,215.767 192.080,215.686 192.157 C 214.254 193.516,212.867 199.138,213.233 202.101 C 213.348 203.025,213.556 204.853,213.696 206.162 C 213.836 207.472,214.089 208.898,214.258 209.332 C 214.427 209.766,214.566 210.562,214.566 211.101 C 214.566 211.640,214.695 212.324,214.854 212.619 C 215.012 212.915,215.255 213.695,215.395 214.352 C 215.769 216.117,216.263 217.991,216.522 218.627 C 216.647 218.936,217.030 220.070,217.373 221.148 C 217.715 222.227,218.088 223.235,218.202 223.389 C 219.555 225.223,217.677 227.914,216.246 226.190 C 216.055 225.959,215.724 225.770,215.512 225.770 C 215.300 225.770,215.126 225.674,215.126 225.556 C 215.126 225.331,213.166 224.004,211.485 223.089 C 210.945 222.795,210.315 222.405,210.084 222.222 C 209.853 222.039,208.985 221.812,208.156 221.717 C 205.903 221.459,205.254 221.003,200.980 216.671 C 197.223 212.863,194.329 210.659,193.052 210.635 C 192.791 210.630,192.332 210.441,192.033 210.215 C 191.663 209.935,190.791 209.804,189.298 209.804 C 188.093 209.804,186.888 209.682,186.621 209.534 C 186.198 209.299,184.648 208.627,182.773 207.865 C 178.312 206.053,171.057 206.119,166.713 208.010 C 165.652 208.472,163.305 210.571,163.305 211.058 C 163.305 211.641,161.763 212.872,160.786 213.067 C 160.260 213.172,159.508 213.426,159.116 213.630 C 158.724 213.835,158.265 214.003,158.096 214.004 C 156.230 214.014,154.508 216.403,154.726 218.680 C 155.103 222.626,155.441 222.008,151.961 223.743 C 150.266 224.589,148.627 225.382,148.319 225.506 C 147.019 226.031,145.462 226.676,144.678 227.016 C 142.037 228.161,137.708 229.695,136.555 229.896 C 136.092 229.977,135.575 230.153,135.404 230.288 C 135.234 230.423,134.541 230.651,133.864 230.795 C 133.187 230.938,131.814 231.258,130.812 231.507 C 129.811 231.756,128.235 232.075,127.311 232.216 C 126.387 232.357,125.190 232.603,124.652 232.763 C 124.114 232.923,121.559 233.053,118.975 233.053 C 113.296 233.053,111.992 232.794,107.821 230.837 C 106.807 230.361,105.900 229.972,105.804 229.972 C 105.709 229.972,105.070 229.594,104.385 229.132 C 103.700 228.669,103.007 228.291,102.844 228.291 C 102.682 228.291,102.448 228.134,102.325 227.941 C 102.202 227.749,101.660 227.348,101.120 227.052 C 100.581 226.755,100.077 226.434,100.000 226.339 C 99.923 226.243,99.041 225.546,98.039 224.789 C 95.002 222.496,89.955 217.680,86.885 214.146 C 86.082 213.221,85.256 212.276,85.049 212.045 C 84.664 211.614,82.546 208.701,81.793 207.567 C 81.562 207.219,81.215 206.770,81.022 206.568 C 80.830 206.367,80.672 206.080,80.672 205.931 C 80.672 205.781,80.230 205.002,79.690 204.200 C 79.150 203.397,78.174 201.651,77.520 200.320 C 76.866 198.988,76.236 197.857,76.120 197.806 C 76.005 197.754,75.910 197.481,75.910 197.198 C 75.910 196.915,75.737 196.327,75.524 195.891 C 74.485 193.754,73.386 190.661,73.388 189.878 C 73.389 189.626,73.201 189.059,72.971 188.617 C 72.741 188.176,72.552 187.489,72.551 187.092 C 72.550 186.694,72.456 186.275,72.343 186.162 C 72.230 186.049,71.990 185.303,71.809 184.505 C 71.629 183.706,71.279 182.234,71.031 181.232 C 70.783 180.231,70.472 178.575,70.340 177.552 C 70.208 176.530,70.005 175.539,69.889 175.352 C 69.773 175.164,69.574 173.795,69.445 172.309 C 68.565 162.097,68.550 161.674,68.915 157.353 C 69.113 155.003,69.358 152.010,69.459 150.700 C 69.561 149.391,69.736 148.120,69.848 147.876 C 69.960 147.632,70.168 146.560,70.310 145.495 C 70.575 143.501,71.080 141.001,71.861 137.815 C 72.107 136.814,72.435 135.364,72.590 134.594 C 72.745 133.824,72.989 133.074,73.131 132.927 C 73.273 132.781,73.389 132.269,73.389 131.790 C 73.389 131.311,73.574 130.675,73.801 130.376 C 74.027 130.077,74.216 129.597,74.221 129.309 C 74.232 128.661,75.021 126.166,75.531 125.167 C 75.740 124.758,75.910 124.221,75.910 123.973 C 75.910 123.725,76.034 123.303,76.186 123.035 C 76.337 122.768,76.909 121.541,77.456 120.308 C 78.003 119.076,78.552 117.878,78.677 117.647 C 79.938 115.302,80.881 113.667,81.551 112.661 C 81.992 111.999,82.353 111.398,82.353 111.326 C 82.353 111.207,84.544 108.076,85.085 107.423 C 85.212 107.269,85.963 106.287,86.753 105.241 C 93.601 96.171,107.677 84.002,115.406 80.468 C 117.642 79.446,118.923 78.991,119.573 78.987 C 119.978 78.985,120.497 78.853,120.728 78.694 C 120.985 78.517,121.746 78.483,122.689 78.607 C 123.536 78.718,127.444 78.781,131.373 78.747",

    "path://M8602.9,4984.1c-57.5-53.7-69-118.8-34.5-187.8c30.7-59.4,65.2-80.5,134.1-80.5c23,0,67.1-24.9,95.8-55.6l51.7-53.7l-149.5-124.6c-82.4-67.1-161-130.3-174.4-138c-42.2-24.9-138,80.5-138,149.5c-1.9,67.1-28.7,109.2-92,143.7c-90.1,47.9-214.6-32.6-214.6-136.1c0-67.1,76.7-149.5,138-149.5c23,0,70.9-26.8,105.4-61.3l61.3-59.4L8210,4100.7l-176.3-128.4l-51.8,49.8c-32.6,28.7-53.7,69-53.7,99.6c0,149.5-191.6,216.5-279.8,99.6c-67.1-86.2,0-233.8,105.4-233.8c46,0,136.1-65.1,136.1-99.6c0-9.6-49.8-44.1-272.1-189.7c-9.6-5.7-19.2-101.6-21.1-210.8c-3.8-178.2-9.6-210.8-59.4-304.7c-30.7-57.5-107.3-157.1-172.5-220.4c-251-247.2-1991-1916.3-2004.4-1922c-7.7-3.8-86.2,46-174.4,111.1c-415.8,298.9-833.6,417.7-1182.3,335.4c-270.2-63.2-438.8-195.5-718.6-559.6C2955.6,496.2,2787,318,2574.3,183.9C2411.4,80.4,2298.4,34.4,1804-132.3c-243.4-82.4-498.2-178.2-565.3-210.8c-318.1-159.1-676.4-454.2-852.7-701.4c-103.5-143.7-207-360.3-251-525c-49.8-184-46-553.8,9.6-760.8c164.8-613.2,659.2-1278.2,1393.1-1868.4c318.1-252.9,682.2-448.4,1009.9-536.6c207-55.6,574.9-59.4,762.7-9.6c287.4,76.7,548,237.6,787.6,484.8c300.8,314.3,450.3,586.4,647.7,1184.3c272.1,824,356.4,940.9,1061.6,1481.3c364.1,279.8,496.3,448.4,559.6,718.6c82.4,348.8-38.3,768.4-335.3,1182.3c-65.1,88.2-115,166.7-111.1,174.4c5.7,15.3,1642.2,1722.7,1902.9,1985.3c72.8,74.7,182.1,161,239.5,191.6c93.9,49.8,126.5,55.6,304.7,59.4c109.2,1.9,205,11.5,210.8,21.1c147.5,224.2,182.1,272.1,193.5,272.1c19.2,0,86.2-76.7,88.1-101.6c0-13.4,3.8-38.3,3.8-55.6c5.7-53.7,82.4-111.1,147.6-111.1c80.5,0,149.5,72.8,147.6,157.1c-1.9,76.7-76.6,149.5-155.2,149.5c-32.6,0-70.9,19.2-101.5,53.7l-51.8,51.7l130.3,176.3l128.4,178.2l61.3-63.2c38.3-38.3,61.3-82.4,61.3-113.1c0-61.3,80.5-130.3,151.4-130.3c103.5,0,182.1,126.5,134.1,214.6c-34.5,63.2-76.6,90.1-143.7,92c-69,0-174.4,95.8-149.5,138c7.7,13.4,70.9,92,138,174.4l124.6,149.5l53.7-51.7c30.7-28.7,55.6-72.8,55.6-95.8c0-69,21.1-103.5,80.5-134.1c155.2-80.5,300.8,111.2,178.2,231.9c-26.8,28.8-69,47.9-101.6,47.9c-34.5,0-72.8,19.2-109.2,57.5l-55.6,57.5l99.6,101.6c120.7,122.6,124.6,155.2,30.7,314.3c-86.2,145.6-191.6,251-341.1,339.2c-155.2,93.9-189.7,90.1-312.3-30.7l-101.6-99.6l-57.5,55.6c-38.3,36.4-57.5,74.7-57.5,109.2C8848.2,4995.6,8691,5066.5,8602.9,4984.1z M4185.9-421.7c452.2-216.5,448.4-860.4-9.6-1084.6c-220.4-107.3-505.9-57.5-684.1,118.8c-115,116.9-172.5,258.7-172.5,431.2c1.9,183.9,55.6,310.4,184,431.2C3703-339.2,3938.7-302.9,4185.9-421.7z M2928.8-1935.5c197.4-201.2,366-383.3,371.7-404.3c32.6-97.7-69-203.1-168.6-178.2c-24.9,7.6-207,174.4-406.3,373.7c-339.2,339.2-362.2,367.9-362.2,433.1c0,84.3,59.4,141.8,145.6,141.8C2559-1569.5,2618.4-1621.2,2928.8-1935.5z",
  ];

  const { acousticness, danceability, speechiness } = trackFeatures;

  const bodyMax = 1;
  const labelSetting = {
    show: true,
    position: "top",
    offset: [0, -10],
    formatter: function (param: any) {
      return (
        param.name + " " + ((param.value / bodyMax) * 100).toFixed(0) + "%"
      );
    },
    fontSize: 14,
    fontFamily: "Arial",
  };
  const markLineSetting = {
    symbol: "none",
    lineStyle: {
      opacity: 0.3,
    },
    data: [
      {
        type: "max",
        label: {
          formatter: "max: {c}",
        },
      },
      {
        type: "min",
        label: {
          formatter: "min: {c}",
        },
      },
    ],
  };
  const option = {
    tooltip: {},
    legend: {
      show: false,
    },
    xAxis: {
      data: ["danceability", "speechiness", "acousticness"],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      max: bodyMax,
      offset: 20,
      splitLine: { show: false },
    },
    grid: {
      top: "center",
      height: 200,
    },
    markLine: {
      z: -100,
    },
    series: [
      {
        type: "pictorialBar",
        symbolClip: true,
        symbolBoundingData: bodyMax,
        label: labelSetting,
        itemStyle: {
          color: "#7658d1",
        },
        data: [
          {
            value: danceability,
            symbol: symbols[0],
          },
          {
            value: speechiness,
            symbol: symbols[1],
          },
          {
            value: acousticness,
            symbol: symbols[2],
          },
        ],
        markLine: markLineSetting,
        z: 10,
      },

      {
        name: "full",
        type: "pictorialBar",
        symbolBoundingData: bodyMax,
        animationDuration: 0,
        itemStyle: {
          color: "#ccc",
        },
        data: [
          {
            value: 1,
            symbol: symbols[0],
          },
          {
            value: 1,
            symbol: symbols[1],
          },
          {
            value: 1,
            symbol: symbols[2],
          },
        ],
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default PictorialBarChart;