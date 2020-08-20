// JavaScript source code


//constructor 
function pilotObject() {

    //Data
    this.pitchData = [8.894235157, 9.198608574, 9.49897186, 9.795342966, 10.08773984, 10.37618045, 10.66068272, 10.94126463, 11.21794411, 11.49073913, 11.75966763, 12.02474756, 12.28599688, 12.54343354, 12.79707549, 13.04694068, 13.29304707, 13.5354126, 13.77405523, 14.00899291, 14.24024359, 14.46782523, 14.69175577, 14.91205316, 15.12873537, 15.34182033, 15.55132601, 15.75727035, 15.95967131, 16.15854684, 16.35391489, 16.54579341, 16.73420035, 16.91915366, 17.10067131, 17.27877123, 17.45347139, 17.62478972, 17.7927442, 17.95735275, 18.11863335, 18.27660394, 18.43128247, 18.58268689, 18.73083515, 18.87574522, 19.01743503, 19.15592255, 19.29122572, 19.42336249, 19.55235082, 19.67820866, 19.80095396, 19.92060467, 20.03717874, 20.15069413, 20.26116879, 20.36862067, 20.47306772, 20.57452789, 20.67301914, 20.76855941, 20.86116666, 20.95085884, 21.03765391, 21.12156981, 21.20262449, 21.28083592, 21.35622203, 21.42880078, 21.49859013, 21.56560802, 21.62987241, 21.69140125, 21.75021249, 21.80632408, 21.85975398, 21.91052013, 21.95864049, 22.00413301, 22.04701565, 22.08730634, 22.12502305, 22.16018373, 22.19280633, 22.2229088, 22.25050909, 22.27562516, 22.29827495, 22.31847642, 22.33624752, 22.3516062, 22.36457042, 22.37515812, 22.38338726, 22.38927579, 22.39284166, 22.39410282, 22.39307723, 22.38978283, 22.38423759, 22.37645944, 22.36646635, 22.35427625, 22.33990712, 22.32337689, 22.30470353, 22.28390497, 22.26099918, 22.2360041, 22.20893769, 22.17981789, 22.14866267, 22.11548997, 22.08031775, 22.04316395, 22.00404653, 21.96298343, 21.91999262, 21.87509205, 21.82829966, 21.7796334, 21.72911124, 21.67675111, 21.62257098, 21.56658879, 21.5088225, 21.44929006, 21.38800941, 21.32499852, 21.26027533, 21.1938578, 21.12576387, 21.05601151, 20.98461865, 20.91160326, 20.83698328, 20.76077667, 20.68300138, 20.60367536, 20.52281656, 20.44044293, 20.35657243, 20.271223, 20.18441261, 20.0961592, 20.00648071, 19.91539512, 19.82292036, 19.72907439, 19.63387516, 19.53734062, 19.43948873, 19.34033743, 19.23990468, 19.13820843, 19.03526663, 18.93109724, 18.8257182, 18.71914746, 18.61140299, 18.50250272, 18.39246462, 18.28130663, 18.16904671, 18.05570281, 17.94129287, 17.82583486, 17.70934672, 17.59184641, 17.47335187, 17.35388106, 17.23345194, 17.11208244, 16.98979053, 16.86659416, 16.74251127, 16.61755983, 16.49175777, 16.36512306, 16.23767365, 16.10942748, 15.98040251, 15.8506167, 15.72008798, 15.58883432, 15.45687367, 15.32422398, 15.19090319, 15.05692927, 14.92232016, 14.78709382, 14.6512682, 14.51486124, 14.37789091, 14.24037514, 14.10233191, 13.96377915, 13.82473482, 13.68521687, 13.54524325, 13.40483191, 13.26400081, 13.1227679, 12.98115113, 12.83916845, 12.69683782, 12.55417717, 12.41120448, 12.26793768, 12.12439474, 11.98059594, 11.83657099, 11.6923519, 11.54797073, 11.4034595, 11.25885026, 11.11417503, 10.96946585, 10.82475476, 10.6800738, 10.53545499, 10.39093038, 10.246532, 10.10229189, 9.958242081, 9.814414611, 9.670841515, 9.527554828, 9.384586588, 9.241968828, 9.099733586, 8.957912897, 8.816538796, 8.675643319, 8.535258503, 8.395416382, 8.256148993, 8.117488371, 7.979466552, 7.842115572, 7.705467466, 7.56955427, 7.43440802, 7.300060752, 7.166544501, 7.033891303, 6.902133194, 6.771302209, 6.641430385, 6.512549757, 6.38469236, 6.257890231, 6.132175405, 6.007579918, 5.884135806, 5.761875104, 5.640829849, 5.521032075, 5.402513819, 5.285307116, 5.169444002, 5.054956513, 4.941876684, 4.830236552, 4.720068151, 4.611403519, 4.50427469, 4.3987137, 4.294752584, 4.19242338, 4.091751009, 3.992731942, 3.895355535, 3.799611148, 3.705488137, 3.612975859, 3.522063672, 3.432740934, 3.344997002, 3.258821232, 3.174202984, 3.091131614, 3.009596479, 2.929586937, 2.851092346, 2.774102063, 2.698605445, 2.62459185, 2.552050635, 2.480971158, 2.411342776, 2.343154846, 2.276396727, 2.211057774, 2.147127347, 2.084594802, 2.023449496, 1.963680788, 1.905278034, 1.848230593, 1.79252782, 1.738159075, 1.685113714, 1.633381095, 1.582950575, 1.533811511, 1.485953262, 1.439365184, 1.394036635, 1.349956972, 1.307115554, 1.265501736, 1.225104877, 1.185914334, 1.147919465, 1.111109627, 1.075474177, 1.041002473, 1.007683873, 0.975507733, 0.944463411, 0.914540265, 0.885727652, 0.858014929, 0.831391454, 0.805846585, 0.781369678, 0.757950092, 0.735577183, 0.71424031, 0.693928829, 0.674632097, 0.656339474, 0.639040315, 0.622723978, 0.607379821, 0.592997201, 0.579565476, 0.567074003, 0.555512139, 0.544869242, 0.53513467, 0.526297779, 0.518347927, 0.511274472, 0.505066771, 0.499714182, 0.495206061, 0.491531767, 0.488680657, 0.486642088, 0.485405417, 0.484960003, 0.485295202, 0.486400372, 0.488264871, 0.490878056, 0.494229283, 0.498307912, 0.503103299, 0.508604801, 0.514801776, 0.521683582, 0.529239576, 0.537459115, 0.546331557, 0.555846259, 0.565992578, 0.576759873, 0.5881375, 0.600114818, 0.612681182, 0.625825952, 0.639538483, 0.653808135, 0.668624264, 0.683976227, 0.699853382, 0.716245086, 0.733140698, 0.750529574, 0.768401071, 0.786744548, 0.805549362, 0.824804869, 0.844500428, 0.864625396, 0.88516913, 0.906120988, 0.927470327, 0.949206505, 0.971318879, 0.993796807, 1.016629646, 1.039806753, 1.063317485, 1.087151202, 1.111297258, 1.135745014, 1.160483824, 1.185503048, 1.210792042, 1.236340164, 1.262136771, 1.288171222, 1.314432872, 1.34091108, 1.367595203, 1.394474599, 1.421538624, 1.448776637, 1.476177995, 1.503732055, 1.531428175, 1.559255712, 1.587204023, 1.615262467, 1.6434204, 1.67166718, 1.699992164, 1.72838471, 1.756834175, 1.785329916, 1.813861292, 1.842417659, 1.870988376, 1.899562798, 1.928130285, 1.956680192, 1.985201878, 2.013684701, 2.042118017, 2.070491184, 2.098793559, 2.1270145, 2.155137675, 2.183123994, 2.210928676, 2.238506944, 2.265814016, 2.292805114, 2.319435458, 2.345660269, 2.371434766, 2.39671417, 2.421453702, 2.445608583, 2.469134032, 2.491985269, 2.514117517, 2.535485994, 2.556045922, 2.57575252, 2.59456101, 2.612426611, 2.629304545, 2.645150031, 2.65991829, 2.673564542, 2.686044009, 2.697311909, 2.707323465, 2.716033895, 2.723398422, 2.729372264, 2.733910643, 2.736968779, 2.738501893, 2.738465204, 2.736813933, 2.733503302, 2.728488529, 2.721724836, 2.713167444, 2.702771571, 2.69049244, 2.67628527, 2.660105282, 2.641907696, 2.621647733, 2.599280613, 2.574761557, 2.548045785, 2.519088517, 2.487844974, 2.454270377, 2.418319945, 2.379948899, 2.339112461, 2.295765849, 2.249864285, 2.201362989, 2.150217182, 2.096382083, 2.039812914, 1.980519566, 1.918730617, 1.854729315, 1.78879891, 1.721222651, 1.652283786, 1.582265564, 1.511451235, 1.440124047, 1.368567249, 1.297064091, 1.225897821, 1.155351687, 1.08570894, 1.017252828, 0.9502666, 0.885033504, 0.82183679, 0.760959707, 0.702685504, 0.647297429, 0.595078732, 0.546312661, 0.501282465, 0.460271394, 0.423562697, 0.391439621, 0.364185417, 0.342083332, 0.325416617, 0.31446852, 0.30952229, 0.310861175, 0.318768426, 0.33352729, 0.355421017, 0.384732855, 0.421746054, 0.466743863, 0.520009529, 0.581826304, 0.652477435, 0.732246171, 0.821415761, 0.920269454, 1.0289872, 1.147335748, 1.27497855, 1.411579056, 1.556800717, 1.710306984, 1.871761307, 2.040827136, 2.217167924, 2.40044712, 2.590328174, 2.786474539, 2.988549664, 3.196217, 3.409139998, 3.626982108, 3.849406782, 4.076077469, 4.306657622, 4.540810689, 4.778200122, 5.018489372, 5.26134189, 5.506421125, 5.75339053, 6.001913553, 6.251653647, 6.502274262, 6.753438848, 7.004810857, 7.256053738, 7.506830943, 7.756805923, 8.005642127, 8.253003007, 8.498552014, 8.741952598, 8.982868209, 9.220962299, 9.455898318, 9.687339717, 9.914949947, 10.13839246, 10.3573307, 10.57142813, 10.78034818, 10.98375433, 11.18131001, 11.37267867, 11.55752377, 11.73550875, 11.90629708, 12.06955219, 12.22493754, 12.37211658, 12.51075276, 12.64050953, 12.76105035, 12.87203865, 12.9731379, 13.06410405, 13.1450631, 13.21623354, 13.27783388, 13.33008261, 13.37319825, 13.40739929, 13.43290423, 13.44993157, 13.45869981, 13.45942746, 13.45233302, 13.43763498, 13.41555185, 13.38630213, 13.35010432, 13.30717693, 13.25773844, 13.20200737, 13.14020221, 13.07254147, 12.99924365, 12.92052725, 12.83661076, 12.7477127, 12.65405155, 12.55584583, 12.45331404, 12.34667466, 12.23614622, 12.1219472, 12.00429611, 11.88341145, 11.75951171, 11.63281542, 11.50354105, 11.37190712, 11.23813212, 11.10243456, 10.96503293, 10.82614574, 10.6859915, 10.54478869, 10.40275582, 10.2601114, 10.11707392, 9.973861888, 9.8306938, 9.687788159, 9.545363466, 9.403638222, 9.262830929, 9.123160088, 8.984844199, 8.848101764, 8.713151284, 8.58021126, 8.449500193, 8.321236584, 8.195638935, 8.072883068, 7.952974097, 7.835874456, 7.721546579, 7.609952902, 7.50105586, 7.394817887, 7.291201418, 7.190168889, 7.091682733, 6.995705385, 6.902199281, 6.811126855, 6.722450542, 6.636132777, 6.552135995, 6.47042263, 6.390955117, 6.313695891, 6.238607387, 6.16565204, 6.094792285, 6.025990556, 5.959209287, 5.894410915, 5.831557874, 5.770612598, 5.711537523, 5.654295082, 5.598847712, 5.545157847, 5.493187921, 5.44290037, 5.394257628, 5.34722213, 5.301756311, 5.257822605, 5.215383449, 5.174401275, 5.13483852, 5.096657617, 5.059821003, 5.024291111, 4.990030376, 4.957001233, 4.925166118, 4.894487464, 4.864927707, 4.836449282, 4.809014622, 4.782586164, 4.757126342, 4.73259759, 4.708962344, 4.686183038, 4.664222108, 4.643041987, 4.622605111, 4.602873915, 4.583810833, 4.5653783, 4.547538752, 4.530254622, 4.513488345, 4.497202358, 4.481359093, 4.465920987, 4.450850473, 4.436109987, 4.421661964, 4.407468838, 4.393493044, 4.379697017, 4.366043192, 4.352494004, 4.339011887, 4.325559276, 4.312098606, 4.298592312, 4.285002828, 4.27129259, 4.257424033, 4.24335959, 4.229061697, 4.214492789, 4.199615301, 4.184391667, 4.168784322, 4.152755701, 4.136268239, 4.11928437, 4.10176653, 4.083677152, 4.064978673, 4.045633527, 4.025604149, 4.004852973, 3.983342434, 3.961034967, 3.937893007, 3.913878989, 3.888955347, 3.863084517, 3.836228933, 3.80835103, 3.779413242, 3.749378005, 3.718207754, 3.685864923, 3.652311947, 3.61751126, 3.581425299, 3.544016496, 3.505247288, 3.46508011, 3.423477395, 3.380401578, 3.335815096, 3.289680381, 3.24195987, 3.192620249, 3.141645214, 3.089022714, 3.034740696, 2.978787109, 2.921149902, 2.861817022, 2.800776417, 2.738016036, 2.673523828, 2.60728774, 2.53929572, 2.469535718, 2.39799568, 2.324663556, 2.249527294, 2.172574841, 2.093794146, 2.013173158, 1.930699825, 1.846362094, 1.760147914, 1.672045233, 1.582042, 1.490126163, 1.39628567, 1.300508469, 1.202782508, 1.103095737, 1.001436102, 0.897845041, 0.792577947, 0.685943701, 0.578251185, 0.469809279, 0.360926865, 0.251912824, 0.143076038, 0.034725388, -0.072830244, -0.179281977, -0.28432093, -0.387638221, -0.48892497, -0.587872294, -0.684215563, -0.777867149, -0.868783676, -0.956921765, -1.04223804, -1.124689123, -1.204231638, -1.280822207, -1.354417453, -1.424973999, -1.492448467, -1.556797482, -1.617977665, -1.675945639, -1.730658027, -1.782102053, -1.830387341, -1.875654117, -1.918042606, -1.957693034, -1.994745626, -2.029340608, -2.061618205, -2.091718642, -2.119782145, -2.145948939, -2.170359251, -2.193153304, -2.214471325, -2.234453539, -2.253240172, -2.270971448, -2.287787594, -2.303828834, -2.319235395, -2.334147501, -2.348705379, -2.363049253, -2.377319349, -2.391655892, -2.406199108, -2.421089222, -2.43646646, -2.452471047];
    this.heightData = [338, 375, 412, 449, 487, 526, 565, 605, 645, 686, 728, 771, 814, 858, 902, 948, 994, 1041, 1088, 1137, 1186, 1236, 1287, 1339, 1391, 1445, 1499, 1554, 1610, 1667, 1725, 1784, 1844, 1904, 1965, 2027, 2089, 2151, 2213, 2276, 2338, 2400, 2461, 2522, 2583, 2643, 2702, 2761, 2818, 2875, 2931, 2987, 3042, 3096, 3150, 3203, 3256, 3308, 3359, 3410, 3461, 3511, 3561, 3611, 3660, 3709, 3757, 3806, 3854, 3902, 3950, 3998, 4045, 4093, 4141, 4188, 4236, 4284, 4332, 4379, 4427, 4475, 4523, 4570, 4618, 4666, 4713, 4760, 4808, 4855, 4902, 4949, 4995, 5042, 5089, 5136, 5183, 5230, 5277, 5324, 5372, 5420, 5469, 5518, 5568, 5618, 5669, 5720, 5772, 5824, 5877, 5931, 5985, 6039, 6093, 6148, 6204, 6259, 6315, 6371, 6427, 6483, 6539, 6596, 6652, 6709, 6766, 6823, 6881, 6939, 6997, 7055, 7113, 7172, 7231, 7291, 7350, 7410, 7471, 7532, 7593, 7654, 7716, 7778, 7840, 7902, 7965, 8028, 8091, 8155, 8219, 8283, 8347, 8412, 8477, 8542, 8608, 8674, 8741, 8809, 8877, 8945, 9015, 9085, 9156, 9227, 9300, 9373, 9447, 9522, 9598, 9675, 9752, 9830, 9909, 9989, 10070, 10151, 10233, 10317, 10400, 10485, 10570, 10656, 10743, 10830, 10918, 11006, 11095, 11184, 11273, 11362, 11452, 11542, 11631, 11721, 11811, 11900, 11990, 12080, 12170, 12260, 12350, 12440, 12531, 12622, 12713, 12805, 12898, 12990, 13084, 13178, 13272, 13366, 13460, 13554, 13647, 13738, 13829, 13917, 14004, 14089, 14171, 14250, 14326, 14399, 14469, 14535, 14598, 14658, 14716, 14771, 14825, 14877, 14927, 14976, 15024, 15072, 15119, 15167, 15214, 15262, 15310, 15358, 15407, 15456, 15505, 15554, 15604, 15653, 15702, 15751, 15799, 15847, 15895, 15943, 15990, 16036, 16082, 16128, 16173, 16218, 16262, 16306, 16350, 16394, 16437, 16480, 16523, 16566, 16608, 16650, 16693, 16735, 16777, 16818, 16860, 16901, 16943, 16984, 17025, 17066, 17107, 17147, 17188, 17228, 17268, 17308, 17348, 17388, 17427, 17467, 17506, 17545, 17584, 17623, 17662, 17700, 17739, 17778, 17816, 17854, 17892, 17930, 17968, 18006, 18044, 18082, 18120, 18157, 18195, 18232, 18270, 18307, 18344, 18381, 18418, 18455, 18492, 18529, 18566, 18603, 18639, 18676, 18713, 18749, 18786, 18822, 18858, 18895, 18931, 18967, 19003, 19039, 19075, 19111, 19147, 19183, 19219, 19255, 19290, 19326, 19362, 19398, 19434, 19469, 19505, 19541, 19577, 19613, 19648, 19684, 19719, 19755, 19790, 19826, 19861, 19896, 19931, 19966, 20001, 20035, 20070, 20104, 20138, 20172, 20206, 20240, 20274, 20307, 20341, 20375, 20408, 20442, 20476, 20509, 20543, 20576, 20610, 20643, 20677, 20711, 20744, 20778, 20811, 20845, 20879, 20912, 20946, 20979, 21013, 21046, 21080, 21113, 21147, 21180, 21214, 21247, 21280, 21314, 21347, 21380, 21414, 21447, 21480, 21514, 21547, 21580, 21614, 21647, 21680, 21714, 21747, 21780, 21814, 21847, 21880, 21914, 21947, 21980, 22014, 22047, 22080, 22114, 22147, 22180, 22214, 22247, 22280, 22314, 22347, 22381, 22414, 22447, 22481, 22514, 22548, 22581, 22614, 22648, 22681, 22715, 22748, 22782, 22815, 22849, 22882, 22916, 22949, 22983, 23016, 23050, 23084, 23117, 23151, 23185, 23218, 23252, 23286, 23319, 23353, 23387, 23420, 23454, 23488, 23522, 23555, 23589, 23623, 23656, 23690, 23724, 23758, 23792, 23826, 23860, 23894, 23928, 23962, 23996, 24030, 24065, 24099, 24134, 24168, 24203, 24238, 24272, 24307, 24341, 24376, 24410, 24444, 24478, 24512, 24546, 24580, 24614, 24647, 24681, 24715, 24749, 24783, 24817, 24852, 24888, 24924, 24961, 24999, 25037, 25076, 25116, 25157, 25198, 25239, 25280, 25320, 25359, 25396, 25432, 25465, 25497, 25525, 25550, 25572, 25591, 25605, 25616, 25624, 25631, 25637, 25643, 25650, 25659, 25670, 25685, 25703, 25727, 25756, 25793, 25836, 25888, 25947, 26012, 26083, 26159, 26238, 26321, 26406, 26491, 26577, 26663, 26747, 26828, 26906, 26980, 27049, 27113, 27173, 27229, 27281, 27330, 27375, 27418, 27458, 27497, 27534, 27569, 27603, 27637, 27670, 27703, 27738, 27775, 27816, 27861, 27913, 27972, 28040, 28118, 28206, 28307, 28422, 28552, 28697, 28860, 29041, 29239, 29452, 29679, 29919, 30170, 30430, 30698, 30973, 31252, 31535, 31820, 32105, 32388, 32670, 32947, 33220, 33490, 33756, 34019, 34279, 34536, 34791, 35044, 35295, 35545, 35793, 36040, 36286, 36532, 36777, 37022, 37266, 37510, 37753, 37996, 38238, 38479, 38719, 38959, 39198, 39435, 39672, 39907, 40142, 40375, 40606, 40837, 41067, 41295, 41522, 41748, 41974, 42198, 42421, 42643, 42865, 43085, 43305, 43524, 43741, 43959, 44175, 44391, 44606, 44820, 45033, 45246, 45457, 45668, 45879, 46088, 46297, 46506, 46713, 46920, 47126, 47331, 47536, 47740, 47944, 48147, 48349, 48551, 48752, 48952, 49152, 49352, 49551, 49749, 49947, 50144, 50341, 50538, 50734, 50929, 51125, 51319, 51514, 51708, 51901, 52095, 52287, 52480, 52672, 52864, 53055, 53247, 53437, 53628, 53818, 54008, 54198, 54388, 54577, 54766, 54955, 55144, 55333, 55521, 55709, 55897, 56085, 56273, 56461, 56648, 56835, 57023, 57210, 57397, 57583, 57770, 57957, 58143, 58330, 58516, 58702, 58888, 59074, 59260, 59446, 59632, 59818, 60004, 60190, 60376, 60562, 60749, 60935, 61122, 61308, 61495, 61682, 61868, 62055, 62242, 62428, 62615, 62801, 62987, 63173, 63358, 63544, 63728, 63913, 64096, 64280, 64463, 64647, 64830, 65014, 65198, 65382, 65568, 65754, 65941, 66130, 66320, 66511, 66704, 66898, 67093, 67290, 67486, 67681, 67876, 68069, 68259, 68447, 68631, 68811, 68986, 69156, 69320, 69479, 69630, 69774, 69913, 70045, 70173, 70295, 70412, 70525, 70634, 70739, 70842, 70941, 71038, 71133, 71226, 71318, 71407, 71495, 71579, 71661, 71738, 71812, 71880, 71943, 72001, 72052, 72097, 72135, 72164, 72186, 72199, 72204, 72201, 72190, 72172, 72146, 72114, 72076, 72031, 71980, 71924, 71863, 71797, 71727, 71652, 71573, 71491, 71405, 71316, 71223, 71127, 71029, 70928, 70825, 70719, 70612, 70502, 70391, 70278, 70165, 70049, 69933, 69816, 69698, 69579, 69459, 69338, 69217, 69094, 68972, 68848, 68724, 68599, 68474, 68349, 68223, 68097, 67971, 67844, 67718, 67591, 67464, 67337, 67210, 67084, 66957, 66831, 66705, 66579, 66454];
    this.speedData = [215, 217, 219, 221, 223, 225, 227, 229, 231, 233, 235, 237, 239, 242, 244, 246, 248, 250, 252, 255, 257, 259, 261, 264, 266, 268, 271, 273, 275, 278, 280, 283, 285, 288, 290, 293, 295, 298, 301, 303, 306, 308, 311, 313, 315, 318, 320, 322, 325, 327, 329, 331, 333, 336, 338, 340, 342, 344, 346, 347, 349, 351, 353, 355, 357, 359, 361, 362, 364, 366, 368, 370, 371, 373, 375, 377, 378, 380, 382, 384, 385, 387, 389, 391, 392, 394, 396, 398, 399, 401, 403, 404, 406, 408, 409, 411, 413, 415, 416, 418, 420, 421, 423, 425, 427, 428, 430, 432, 434, 436, 438, 440, 442, 444, 446, 448, 450, 452, 454, 456, 458, 460, 462, 464, 466, 468, 470, 472, 474, 476, 478, 480, 482, 485, 487, 489, 491, 493, 495, 498, 500, 502, 504, 507, 509, 511, 514, 516, 518, 521, 523, 525, 528, 530, 533, 535, 538, 540, 543, 545, 548, 551, 553, 556, 559, 562, 564, 567, 570, 573, 576, 579, 583, 586, 589, 592, 596, 599, 602, 606, 610, 613, 617, 621, 624, 628, 632, 636, 640, 644, 648, 652, 656, 660, 664, 668, 672, 676, 680, 685, 689, 693, 697, 701, 706, 710, 714, 719, 723, 728, 732, 737, 741, 746, 751, 756, 761, 766, 771, 776, 781, 786, 791, 796, 801, 807, 812, 817, 822, 828, 833, 839, 844, 849, 855, 860, 865, 871, 876, 881, 887, 892, 897, 902, 907, 912, 917, 922, 927, 932, 937, 942, 947, 952, 957, 962, 966, 971, 976, 981, 985, 990, 995, 999, 1004, 1009, 1013, 1018, 1022, 1027, 1031, 1036, 1040, 1045, 1049, 1053, 1058, 1062, 1066, 1071, 1075, 1079, 1083, 1087, 1092, 1096, 1100, 1104, 1108, 1112, 1116, 1120, 1124, 1128, 1132, 1136, 1140, 1144, 1148, 1151, 1155, 1159, 1163, 1167, 1170, 1174, 1178, 1181, 1185, 1189, 1192, 1196, 1199, 1203, 1207, 1210, 1214, 1217, 1221, 1224, 1227, 1231, 1234, 1238, 1241, 1244, 1248, 1251, 1254, 1258, 1261, 1264, 1267, 1271, 1274, 1277, 1280, 1283, 1286, 1289, 1293, 1296, 1299, 1302, 1305, 1308, 1311, 1314, 1317, 1320, 1323, 1326, 1329, 1332, 1335, 1338, 1341, 1343, 1346, 1349, 1352, 1355, 1357, 1360, 1363, 1366, 1368, 1371, 1373, 1376, 1379, 1381, 1384, 1386, 1389, 1392, 1394, 1397, 1399, 1402, 1404, 1407, 1409, 1412, 1414, 1417, 1419, 1422, 1424, 1426, 1429, 1431, 1434, 1436, 1438, 1441, 1443, 1445, 1448, 1450, 1452, 1455, 1457, 1459, 1462, 1464, 1466, 1468, 1471, 1473, 1475, 1477, 1480, 1482, 1484, 1486, 1488, 1491, 1493, 1495, 1497, 1499, 1501, 1504, 1506, 1508, 1510, 1512, 1514, 1516, 1518, 1520, 1523, 1525, 1527, 1529, 1531, 1533, 1535, 1537, 1539, 1541, 1543, 1545, 1547, 1549, 1551, 1553, 1555, 1557, 1559, 1561, 1563, 1565, 1567, 1569, 1571, 1573, 1575, 1577, 1578, 1580, 1582, 1584, 1586, 1588, 1590, 1592, 1594, 1596, 1597, 1599, 1601, 1603, 1605, 1607, 1609, 1610, 1612, 1614, 1616, 1618, 1620, 1621, 1623, 1625, 1627, 1629, 1631, 1632, 1634, 1636, 1638, 1639, 1641, 1643, 1645, 1647, 1648, 1650, 1652, 1654, 1655, 1657, 1659, 1661, 1663, 1664, 1666, 1668, 1670, 1672, 1673, 1675, 1677, 1679, 1681, 1683, 1685, 1687, 1688, 1690, 1692, 1695, 1697, 1699, 1701, 1703, 1705, 1707, 1710, 1712, 1714, 1717, 1719, 1721, 1724, 1726, 1729, 1731, 1733, 1736, 1738, 1741, 1743, 1746, 1748, 1750, 1753, 1755, 1758, 1760, 1763, 1765, 1768, 1771, 1773, 1776, 1778, 1781, 1783, 1786, 1789, 1791, 1794, 1796, 1799, 1802, 1804, 1807, 1809, 1812, 1814, 1817, 1819, 1822, 1824, 1827, 1829, 1832, 1834, 1837, 1839, 1842, 1845, 1848, 1851, 1854, 1857, 1860, 1864, 1867, 1871, 1875, 1880, 1884, 1889, 1895, 1901, 1907, 1913, 1920, 1928, 1936, 1944, 1953, 1962, 1971, 1980, 1990, 1999, 2009, 2019, 2029, 2039, 2049, 2059, 2069, 2079, 2088, 2098, 2108, 2118, 2127, 2137, 2147, 2157, 2167, 2177, 2187, 2197, 2207, 2218, 2228, 2239, 2249, 2260, 2271, 2282, 2293, 2303, 2314, 2325, 2336, 2347, 2358, 2369, 2380, 2390, 2401, 2412, 2424, 2435, 2446, 2458, 2469, 2481, 2493, 2506, 2518, 2531, 2545, 2558, 2572, 2586, 2600, 2615, 2629, 2644, 2659, 2674, 2690, 2705, 2721, 2736, 2752, 2767, 2783, 2799, 2815, 2831, 2847, 2864, 2880, 2897, 2914, 2931, 2948, 2966, 2984, 3002, 3020, 3039, 3058, 3078, 3097, 3117, 3137, 3158, 3178, 3199, 3220, 3241, 3262, 3284, 3305, 3327, 3348, 3370, 3392, 3414, 3436, 3458, 3480, 3502, 3525, 3547, 3570, 3593, 3615, 3638, 3661, 3685, 3708, 3731, 3755, 3779, 3803, 3827, 3852, 3877, 3902, 3928, 3953, 3980, 4007, 4034, 4061, 4089, 4118, 4147, 4176, 4205, 4235, 4266, 4297, 4328, 4359, 4391, 4423, 4456, 4489, 4522, 4555, 4589, 4623, 4658, 4692, 4727, 4762, 4797, 4832, 4867, 4902, 4938, 4973, 5009, 5044, 5080, 5116, 5153, 5190, 5228, 5266, 5305, 5346, 5387, 5429, 5472, 5516, 5562, 5609, 5657, 5706, 5755, 5805, 5853, 5901, 5948, 5993, 6036, 6077, 6115, 6150, 6181, 6209, 6233, 6252, 6268, 6280, 6289, 6294, 6297, 6296, 6293, 6287, 6279, 6269, 6257, 6243, 6228, 6211, 6194, 6174, 6154, 6134, 6112, 6089, 6067, 6043, 6020, 5996, 5972, 5948, 5925, 5901, 5879, 5856, 5834, 5812, 5790, 5769, 5748, 5727, 5707, 5686, 5666, 5645, 5625, 5605, 5584, 5564, 5544, 5523, 5503, 5482, 5462, 5442, 5421, 5401, 5380, 5360, 5340, 5320, 5299, 5279, 5259, 5239, 5219, 5199, 5179, 5160, 5140, 5121, 5101, 5082, 5063, 5044, 5025, 5006, 4988];

    //Pilot controlled variables
    this.currentPitch = 0;     
    this.currentRoll = 0;
    this.currentYaw = 0;
    this.currentTime = 0;

    //offsets
    this.pitchOffset = 0;
    this.rollOffset = 0;
    this.yawOffset = 0;

}


pilotObject.prototype.load = function () {
    this.loadDisplay();
    this.loadButtons();
}


//load functions 
pilotObject.prototype.loadDisplay = function () {

    //pilot display
    var hudWidth = $(".pilot-ihud").width();
    var offset = centerObject(($(".hud-outer").width()), hudWidth);
    $(".hud-outer").css("left", offset + "px");
    $(".hud-detail").css("left", offset + "px");
    $(".hud-titles").css("left", offset + "px");

    //position sky container and sky
    var skyw = $(".hud-outer").width() * 0.7;
    $(".hud-sky").width(skyw);
    var offset = centerObject(skyw, hudWidth);
    $(".hud-sky").css("left", offset + "px");
    var offset = centerObject($(".sky-SVG").width(), skyw);
    $(".sky-SVG").css("left", offset + "px");

}
pilotObject.prototype.loadButtons = function () {

    //all buttons working 

    var BIKFButton = $(".BIKF-abort");
    var CYHZButton = $(".CYHZ-abort");
    var rollLeftButton = $(".roll-left");
    var rollRightButton = $(".roll-right");
    var pitchUpButton = $(".pitch-up");
    var pitchDownButton = $(".pitch-down");
    var yawLeftButton = $(".yaw-left");
    var yawRightButton = $(".yaw-right");

    BIKFButton.on("click", () => {
        alert("BIKFButton!");
    })

    CYHZButton.on("click", () => {
        alert("CYHZButton!");
    })


    rollRightButton.on("click", () => {
        //right is negative
        this.currentRoll += -1;
        this.updateSkySVG();
    })

    rollLeftButton.on("click", () => {
        //left is positive
        this.currentRoll += 1;
        this.updateSkySVG();
    })

    pitchUpButton.on("click", () => {
        
        //update the pitch by 1 degree
        this.currentPitch += 1;     
        this.updateSkySVG();

    })

    pitchDownButton.on("click", () => {

        //update the pitch by 1 degree
        this.currentPitch += -1;
        this.updateSkySVG();

    })

    yawRightButton.on("click", () => {
        //right is positive
        this.currentYaw += 1;
        this.updateSkySVG();
    })

    yawLeftButton.on("click", () => {
        this.currentYaw += -1;
        this.updateSkySVG();
    })

}

pilotObject.prototype.update = function(time) {
    //called every second 

    this.currentTime = time;
    this.updateDebug();
    this.updateHud();

    //take the positions of the variables and use them to update the screeen...
}

pilotObject.prototype.updateDebug = function () {

    //update all left hand debug values
    $(".speed-aim").html(Math.round((this.speedData[this.currentTime] / 343) * 100) / 100);
    $(".pitch-aim").html(Math.round(this.pitchData[this.currentTime]));
    $(".height-aim").html(Math.round(this.heightData[this.currentTime]));

    //update all right hand debug values
    $(".current-pitch").html(Math.round(this.currentPitch));
    $(".current-yaw").html(Math.round(this.currentYaw));
    $(".current-roll").html(Math.round(this.currentRoll));

}

pilotObject.prototype.updateHud = function () {

    //update the pointers
    var pitchPointer = 50 - ((this.pitchData[this.currentTime])/ 2);  //there is a differance conversation factor going on here!!                   
    $(".pitch-pointer").css("top", pitchPointer + "%");
    
}


pilotObject.prototype.updateSkySVG = function () {

    // Aim: take the current variables and update the position of the sky

    //pitch is working 
    var skyPitch = ((this.currentPitch) / 2);        //translate currentPitch to sky location 
    //console.log(this.currentPitch);
    $(".sky-SVG").css("top", skyPitch + "%");

    //Roll
    var skyRoll = this.currentRoll;
    $(".sky-SVG").css({ 'transform': 'rotate(' + skyRoll + 'deg)'});

}



//helper functions

function centerObject(objectWidth, containerWidth) {
    return (containerWidth - objectWidth) / 2;
}

export default pilotObject;