// JavaScript source code


//constructor 
function pilotObject() {

    //Data (aim values)

    this.pitchData = [11.5625057, 11.95819115, 12.34866342, 12.73394586, 13.1140618, 13.48903458, 13.85888754, 14.22364402, 14.58332735, 14.93796087, 15.28756792, 15.63217183, 15.97179595, 16.3064636, 16.63619814, 16.96102289, 17.28096119, 17.59603638, 17.9062718, 18.21169078, 18.51231667, 18.80817279, 19.09928249, 19.38566911, 19.66735598, 19.94436643, 20.21672381, 20.48445146, 20.74757271, 21.00611089, 21.26008935, 21.50953143, 21.75446045, 21.99489976, 22.2308727, 22.4624026, 22.6895128, 22.91222664, 23.13056745, 23.34455858, 23.55422336, 23.75958512, 23.9606672, 24.15749295, 24.3500857, 24.53846879, 24.72266554, 24.90269931, 25.07859343, 25.25037124, 25.41805607, 25.58167126, 25.74124014, 25.89678607, 26.04833237, 26.19590237, 26.33951943, 26.47920687, 26.61498803, 26.74688626, 26.87492488, 26.99912723, 27.11951666, 27.2361165, 27.34895008, 27.45804075, 27.56341184, 27.66508669, 27.76308864, 27.85744102, 27.94816717, 28.03529043, 28.11883414, 28.19882163, 28.27527624, 28.34822131, 28.41768018, 28.48367617, 28.54623264, 28.60537292, 28.66112034, 28.71349825, 28.76252997, 28.80823885, 28.85064823, 28.88978144, 28.92566182, 28.9583127, 28.98775743, 29.01401934, 29.03712178, 29.05708806, 29.07394154, 29.08770556, 29.09840344, 29.10605853, 29.11069416, 29.11233367, 29.1110004, 29.10671768, 29.09950886, 29.08939727, 29.07640625, 29.06055913, 29.04187926, 29.02038996, 28.99611458, 28.96907646, 28.93929893, 28.90680533, 28.87161899, 28.83376326, 28.79326147, 28.75013696, 28.70441307, 28.65611313, 28.60526048, 28.55187846, 28.49599041, 28.43761966, 28.37678955, 28.31352342, 28.24784461, 28.17977644, 28.10934227, 28.03656543, 27.96146925, 27.88407707, 27.80441224, 27.72249808, 27.63835793, 27.55201514, 27.46349304, 27.37281496, 27.28000425, 27.18508424, 27.08807827, 26.98900967, 26.88790179, 26.78477796, 26.67966152, 26.57257581, 26.46354415, 26.3525899, 26.23973639, 26.12500695, 26.00842493, 25.89001366, 25.76979647, 25.64779671, 25.52403771, 25.39854281, 25.27133535, 25.14243866, 25.01187609, 24.87967096, 24.74584662, 24.61042641, 24.47343365, 24.3348917, 24.19482388, 24.05325354, 23.91020401, 23.76569862, 23.61976072, 23.47241365, 23.32368073, 23.17358532, 23.02215074, 22.86940033, 22.71535743, 22.56004538, 22.40348752, 22.24570717, 22.08672769, 21.92657241, 21.76526465, 21.60282778, 21.43928511, 21.27465998, 21.10897574, 20.94225573, 20.77452327, 20.60580171, 20.43611438, 20.26548462, 20.09393577, 19.92149117, 19.74817415, 19.57400805, 19.39901621, 19.22322197, 19.04664865, 18.86931961, 18.69125818, 18.51248769, 18.33303148, 18.15291289, 17.97215526, 17.79078193, 17.60881622, 17.42628149, 17.24320106, 17.05959827, 16.87549647, 16.69091899, 16.50588916, 16.32043033, 16.13456582, 15.94831899, 15.76171316, 15.57477473, 15.38754228, 15.20005748, 15.01236195, 14.82449735, 14.63650533, 14.44842753, 14.2603056, 14.07218119, 13.88409593, 13.69609149, 13.50820949, 13.3204916, 13.13297946, 12.94571471, 12.75873899, 12.57209397, 12.38582128, 12.19996256, 12.01455948, 11.82965366, 11.64528677, 11.46150043, 11.27833632, 11.09583605, 10.9140413, 10.73299369, 10.55273488, 10.37330652, 10.19475024, 10.01710771, 9.840420551, 9.664730426, 9.490078977, 9.316507851, 9.144058694, 8.972773152, 8.802692872, 8.6338595, 8.466314684, 8.300100068, 8.135257301, 7.971828027, 7.809853894, 7.649376548, 7.490437636, 7.333078803, 7.177341697, 7.023267964, 6.87089925, 6.720277202, 6.571443466, 6.424439689, 6.279307517, 6.136088597, 5.994824574, 5.855557096, 5.718327809, 5.58317836, 5.450150394, 5.319276312, 5.190551524, 5.063962196, 4.939494493, 4.817134578, 4.696868617, 4.578682774, 4.462563214, 4.348496102, 4.236467602, 4.126463879, 4.018471098, 3.912475423, 3.808463019, 3.70642005, 3.606332682, 3.508187079, 3.411969405, 3.317665826, 3.225262505, 3.134745609, 3.0461013, 2.959315745, 2.874375107, 2.791265551, 2.709973242, 2.630484345, 2.552785025, 2.476861445, 2.402699771, 2.330286167, 2.259606798, 2.190647828, 2.123395423, 2.057835747, 1.993954965, 1.93173924, 1.871174739, 1.812247625, 1.754944064, 1.69925022, 1.645152257, 1.59263634, 1.541688635, 1.492295305, 1.444442515, 1.39811643, 1.353303215, 1.309989034, 1.268160052, 1.227802434, 1.188902344, 1.151445947, 1.115419408, 1.080808891, 1.04760056, 1.015780582, 0.98533512, 0.956250338, 0.928512403, 0.902107477, 0.877021727, 0.853241316, 0.830752409, 0.809541171, 0.789593767, 0.770896362, 0.753435119, 0.737196204, 0.722165781, 0.708330015, 0.69567507, 0.684187112, 0.673852305, 0.664656814, 0.656586802, 0.649628436, 0.64376788, 0.638991297, 0.635284854, 0.632634714, 0.631027042, 0.630448004, 0.630883763, 0.632320484, 0.634744332, 0.638141472, 0.642498068, 0.647800285, 0.654034288, 0.661186241, 0.669242309, 0.678188657, 0.688011448, 0.698696849, 0.710231023, 0.722600136, 0.735790352, 0.749787835, 0.76457875, 0.780149263, 0.796485537, 0.813573737, 0.831400029, 0.849950575, 0.869211543, 0.889169095, 0.909809396, 0.931118612, 0.953082907, 0.975688446, 0.998921393, 1.022767913, 1.04721417, 1.07224633, 1.097850556, 1.124013014, 1.150719869, 1.177957284, 1.205711425, 1.233968457, 1.262714543, 1.291935849, 1.321618539, 1.351748778, 1.382312731, 1.413296562, 1.444686436, 1.476468518, 1.508628971, 1.541153962, 1.574029655, 1.607242213, 1.640777803, 1.674622588, 1.708762734, 1.743184404, 1.777873764, 1.812816978, 1.848000212, 1.883409629, 1.919031394, 1.954851672, 1.990856628, 2.027032426, 2.063365231, 2.099841207, 2.13644652, 2.173167334, 2.209989813, 2.246900123, 2.283884427, 2.320928891, 2.35801968, 2.395142957, 2.432284888, 2.469431638, 2.50656937, 2.54368425, 2.580762442, 2.617790111, 2.654753422, 2.691638539, 2.728431626, 2.76511885, 2.801678977, 2.838061192, 2.874207279, 2.910059027, 2.945558221, 2.980646649, 3.015266096, 3.049358349, 3.082865196, 3.115728421, 3.147889813, 3.179291158, 3.209874241, 3.23958085, 3.268352772, 3.296131792, 3.322859698, 3.348478276, 3.372929313, 3.396154595, 3.418095908, 3.43869504, 3.457893777, 3.475633905, 3.491857211, 3.506505482, 3.519520504, 3.530844064, 3.540417948, 3.548183944, 3.554083836, 3.558059413, 3.56005246, 3.560004765, 3.557858114, 3.553554292, 3.547035088, 3.538242287, 3.527117677, 3.513603043, 3.497640172, 3.479170851, 3.458136867, 3.434480005, 3.408142053, 3.379064797, 3.347190024, 3.31245952, 3.274815072, 3.234198466, 3.190551489, 3.143815928, 3.093933569, 3.040846199, 2.984495604, 2.924823571, 2.861771886, 2.795282336, 2.725296708, 2.651756788, 2.574675436, 2.494349802, 2.41114811, 2.325438583, 2.237589446, 2.147968921, 2.056945233, 1.964886605, 1.872161261, 1.779137424, 1.686183318, 1.593667167, 1.501957194, 1.411421622, 1.322428676, 1.235346579, 1.150543555, 1.068387827, 0.989247619, 0.913491155, 0.841486658, 0.773602351, 0.710206459, 0.651667205, 0.598352813, 0.550631506, 0.508871507, 0.473441042, 0.444708332, 0.423041602, 0.408809076, 0.402378977, 0.404119528, 0.414398953, 0.433585477, 0.462047322, 0.500152711, 0.54826987, 0.606767021, 0.676012388, 0.756374195, 0.848220665, 0.951920022, 1.067840489, 1.19635029, 1.33768336, 1.491536473, 1.657472115, 1.835052773, 2.023840932, 2.223399079, 2.433289699, 2.653075277, 2.882318301, 3.120581256, 3.367426627, 3.622416901, 3.885114563, 4.1550821, 4.431881997, 4.715076741, 5.004228817, 5.29890071, 5.598654908, 5.903053896, 6.211660159, 6.524036184, 6.839744457, 7.158347463, 7.479407689, 7.802487619, 8.127149742, 8.452956541, 8.779470503, 9.106254114, 9.43286986, 9.758880226, 10.0838477, 10.40733477, 10.72890391, 11.04811762, 11.36453838, 11.67772867, 11.98725099, 12.29266781, 12.59354163, 12.88943493, 13.17991019, 13.46452991, 13.74285656, 14.01445264, 14.27888063, 14.53570301, 14.78448227, 15.0247809, 15.25616138, 15.4781862, 15.69041785, 15.8924188, 16.08375155, 16.26397859, 16.43266239, 16.58936545, 16.73365025, 16.86507927, 16.98333527, 17.08858203, 17.1811036, 17.26118404, 17.3291074, 17.38515773, 17.42961907, 17.46277549, 17.48491104, 17.49630976, 17.4972557, 17.48803292, 17.46892548, 17.44021741, 17.40219277, 17.35513562, 17.29933, 17.23505997, 17.16260958, 17.08226288, 16.99430392, 16.89901675, 16.79668542, 16.68759399, 16.57202651, 16.45026702, 16.32259958, 16.18930825, 16.05067706, 15.90699008, 15.75853136, 15.60558494, 15.44843488, 15.28736523, 15.12266004, 14.95460336, 14.78347925, 14.60957175, 14.43316492, 14.25454281, 14.07398947, 13.89178894, 13.7082253, 13.52358257, 13.33814482, 13.1521961, 12.96602045, 12.77990194, 12.59412461, 12.40897251, 12.22472969, 12.04168021, 11.86010811, 11.68029746, 11.50253229, 11.32709667, 11.15427464, 10.98435025, 10.81760756, 10.65433062, 10.49474799, 10.33886633, 10.18663679, 10.03801055, 9.892938773, 9.751372618, 9.613263253, 9.478561844, 9.347219555, 9.219187552, 9.094417001, 8.972859065, 8.854464911, 8.739185705, 8.62697261, 8.517776793, 8.411549418, 8.308241652, 8.207804658, 8.110189604, 8.015347652, 7.92322997, 7.833787722, 7.746972074, 7.66273419, 7.581025236, 7.501796377, 7.424998779, 7.350583607, 7.278502026, 7.208705201, 7.141144297, 7.075770481, 7.012534916, 6.951388769, 6.892283204, 6.835169387, 6.779998483, 6.726721658, 6.675290076, 6.625654902, 6.577767303, 6.531578444, 6.487039489, 6.444101603, 6.402715953, 6.362833703, 6.324406019, 6.287384066, 6.251719009, 6.217362013, 6.184264244, 6.152376867, 6.121651047, 6.09203795, 6.06348874, 6.035954583, 6.009386645, 5.983736089, 5.958954083, 5.93499179, 5.911800377, 5.889331008, 5.867534849, 5.846363065, 5.825766821, 5.805697283, 5.786105615, 5.766942984, 5.748160553, 5.72970949, 5.711540958, 5.693606123, 5.67585615, 5.658242205, 5.640715453, 5.623227059, 5.605728188, 5.588170005, 5.570503677, 5.552680368, 5.534651243, 5.516367467, 5.497780207, 5.478840626, 5.459499891, 5.439709167, 5.419419618, 5.398582411, 5.37714871, 5.355069681, 5.332296488, 5.308780298, 5.284472275, 5.259323585, 5.233285393, 5.206308864, 5.178345164, 5.149345457, 5.119260909, 5.088042686, 5.055641951, 5.022009872, 4.987097613, 4.950856339, 4.913237215, 4.874191407, 4.83367008, 4.7916244, 4.748005531, 4.702764638, 4.655852888, 4.607221445, 4.556821475, 4.504604142, 4.450520613, 4.394522052, 4.336559624, 4.276584496, 4.214547831, 4.150406324, 4.084138778, 4.015729528, 3.945162905, 3.872423242, 3.797494872, 3.720362128, 3.641009342, 3.559420847, 3.475580976, 3.389474062, 3.301084437, 3.210396433, 3.117394384, 3.022062623, 2.924385482, 2.824347293, 2.72193239, 2.617125106, 2.509909772, 2.400270722, 2.288192288, 2.173658803, 2.0566546, 1.937164012, 1.815171371, 1.690661009, 1.563617261, 1.434024458, 1.301866933, 1.167198554, 1.030351332, 0.891726812, 0.75172654, 0.610752062, 0.469204924, 0.327486671, 0.18599885, 0.045143005, -0.094679317, -0.23306657, -0.369617209, -0.503929688, -0.635602461, -0.764233982, -0.889480232, -1.011227294, -1.129418778, -1.243998294, -1.354909452, -1.46209586, -1.565501129, -1.665068869, -1.760742689, -1.852466198, -1.940183008, -2.023836726, -2.103370964, -2.17872933, -2.249855435, -2.316732668, -2.379503543, -2.438350352, -2.493455388, -2.545000944, -2.593169314, -2.63814279, -2.680103666, -2.719234235, -2.755716789, -2.789733621, -2.821467026, -2.851099295, -2.878812722, -2.904789601, -2.929212223, -2.952262882, -2.974123872, -2.994977484, -3.015006013, -3.034391752, -3.053316992, -3.071964029, -3.090515153, -3.10915266, -3.12805884, -3.147415989, -3.167406398, -3.188212362];
    this.heightData = [338, 375, 412, 449, 487, 526, 565, 605, 645, 686, 728, 771, 814, 858, 902, 948, 994, 1041, 1088, 1137, 1186, 1236, 1287, 1339, 1391, 1445, 1499, 1554, 1610, 1667, 1725, 1784, 1844, 1904, 1965, 2027, 2089, 2151, 2213, 2276, 2338, 2400, 2461, 2522, 2583, 2643, 2702, 2761, 2818, 2875, 2931, 2987, 3042, 3096, 3150, 3203, 3256, 3308, 3359, 3410, 3461, 3511, 3561, 3611, 3660, 3709, 3757, 3806, 3854, 3902, 3950, 3998, 4045, 4093, 4141, 4188, 4236, 4284, 4332, 4379, 4427, 4475, 4523, 4570, 4618, 4666, 4713, 4760, 4808, 4855, 4902, 4949, 4995, 5042, 5089, 5136, 5183, 5230, 5277, 5324, 5372, 5420, 5469, 5518, 5568, 5618, 5669, 5720, 5772, 5824, 5877, 5931, 5985, 6039, 6093, 6148, 6204, 6259, 6315, 6371, 6427, 6483, 6539, 6596, 6652, 6709, 6766, 6823, 6881, 6939, 6997, 7055, 7113, 7172, 7231, 7291, 7350, 7410, 7471, 7532, 7593, 7654, 7716, 7778, 7840, 7902, 7965, 8028, 8091, 8155, 8219, 8283, 8347, 8412, 8477, 8542, 8608, 8674, 8741, 8809, 8877, 8945, 9015, 9085, 9156, 9227, 9300, 9373, 9447, 9522, 9598, 9675, 9752, 9830, 9909, 9989, 10070, 10151, 10233, 10317, 10400, 10485, 10570, 10656, 10743, 10830, 10918, 11006, 11095, 11184, 11273, 11362, 11452, 11542, 11631, 11721, 11811, 11900, 11990, 12080, 12170, 12260, 12350, 12440, 12531, 12622, 12713, 12805, 12898, 12990, 13084, 13178, 13272, 13366, 13460, 13554, 13647, 13738, 13829, 13917, 14004, 14089, 14171, 14250, 14326, 14399, 14469, 14535, 14598, 14658, 14716, 14771, 14825, 14877, 14927, 14976, 15024, 15072, 15119, 15167, 15214, 15262, 15310, 15358, 15407, 15456, 15505, 15554, 15604, 15653, 15702, 15751, 15799, 15847, 15895, 15943, 15990, 16036, 16082, 16128, 16173, 16218, 16262, 16306, 16350, 16394, 16437, 16480, 16523, 16566, 16608, 16650, 16693, 16735, 16777, 16818, 16860, 16901, 16943, 16984, 17025, 17066, 17107, 17147, 17188, 17228, 17268, 17308, 17348, 17388, 17427, 17467, 17506, 17545, 17584, 17623, 17662, 17700, 17739, 17778, 17816, 17854, 17892, 17930, 17968, 18006, 18044, 18082, 18120, 18157, 18195, 18232, 18270, 18307, 18344, 18381, 18418, 18455, 18492, 18529, 18566, 18603, 18639, 18676, 18713, 18749, 18786, 18822, 18858, 18895, 18931, 18967, 19003, 19039, 19075, 19111, 19147, 19183, 19219, 19255, 19290, 19326, 19362, 19398, 19434, 19469, 19505, 19541, 19577, 19613, 19648, 19684, 19719, 19755, 19790, 19826, 19861, 19896, 19931, 19966, 20001, 20035, 20070, 20104, 20138, 20172, 20206, 20240, 20274, 20307, 20341, 20375, 20408, 20442, 20476, 20509, 20543, 20576, 20610, 20643, 20677, 20711, 20744, 20778, 20811, 20845, 20879, 20912, 20946, 20979, 21013, 21046, 21080, 21113, 21147, 21180, 21214, 21247, 21280, 21314, 21347, 21380, 21414, 21447, 21480, 21514, 21547, 21580, 21614, 21647, 21680, 21714, 21747, 21780, 21814, 21847, 21880, 21914, 21947, 21980, 22014, 22047, 22080, 22114, 22147, 22180, 22214, 22247, 22280, 22314, 22347, 22381, 22414, 22447, 22481, 22514, 22548, 22581, 22614, 22648, 22681, 22715, 22748, 22782, 22815, 22849, 22882, 22916, 22949, 22983, 23016, 23050, 23084, 23117, 23151, 23185, 23218, 23252, 23286, 23319, 23353, 23387, 23420, 23454, 23488, 23522, 23555, 23589, 23623, 23656, 23690, 23724, 23758, 23792, 23826, 23860, 23894, 23928, 23962, 23996, 24030, 24065, 24099, 24134, 24168, 24203, 24238, 24272, 24307, 24341, 24376, 24410, 24444, 24478, 24512, 24546, 24580, 24614, 24647, 24681, 24715, 24749, 24783, 24817, 24852, 24888, 24924, 24961, 24999, 25037, 25076, 25116, 25157, 25198, 25239, 25280, 25320, 25359, 25396, 25432, 25465, 25497, 25525, 25550, 25572, 25591, 25605, 25616, 25624, 25631, 25637, 25643, 25650, 25659, 25670, 25685, 25703, 25727, 25756, 25793, 25836, 25888, 25947, 26012, 26083, 26159, 26238, 26321, 26406, 26491, 26577, 26663, 26747, 26828, 26906, 26980, 27049, 27113, 27173, 27229, 27281, 27330, 27375, 27418, 27458, 27497, 27534, 27569, 27603, 27637, 27670, 27703, 27738, 27775, 27816, 27861, 27913, 27972, 28040, 28118, 28206, 28307, 28422, 28552, 28697, 28860, 29041, 29239, 29452, 29679, 29919, 30170, 30430, 30698, 30973, 31252, 31535, 31820, 32105, 32388, 32670, 32947, 33220, 33490, 33756, 34019, 34279, 34536, 34791, 35044, 35295, 35545, 35793, 36040, 36286, 36532, 36777, 37022, 37266, 37510, 37753, 37996, 38238, 38479, 38719, 38959, 39198, 39435, 39672, 39907, 40142, 40375, 40606, 40837, 41067, 41295, 41522, 41748, 41974, 42198, 42421, 42643, 42865, 43085, 43305, 43524, 43741, 43959, 44175, 44391, 44606, 44820, 45033, 45246, 45457, 45668, 45879, 46088, 46297, 46506, 46713, 46920, 47126, 47331, 47536, 47740, 47944, 48147, 48349, 48551, 48752, 48952, 49152, 49352, 49551, 49749, 49947, 50144, 50341, 50538, 50734, 50929, 51125, 51319, 51514, 51708, 51901, 52095, 52287, 52480, 52672, 52864, 53055, 53247, 53437, 53628, 53818, 54008, 54198, 54388, 54577, 54766, 54955, 55144, 55333, 55521, 55709, 55897, 56085, 56273, 56461, 56648, 56835, 57023, 57210, 57397, 57583, 57770, 57957, 58143, 58330, 58516, 58702, 58888, 59074, 59260, 59446, 59632, 59818, 60004, 60190, 60376, 60562, 60749, 60935, 61122, 61308, 61495, 61682, 61868, 62055, 62242, 62428, 62615, 62801, 62987, 63173, 63358, 63544, 63728, 63913, 64096, 64280, 64463, 64647, 64830, 65014, 65198, 65382, 65568, 65754, 65941, 66130, 66320, 66511, 66704, 66898, 67093, 67290, 67486, 67681, 67876, 68069, 68259, 68447, 68631, 68811, 68986, 69156, 69320, 69479, 69630, 69774, 69913, 70045, 70173, 70295, 70412, 70525, 70634, 70739, 70842, 70941, 71038, 71133, 71226, 71318, 71407, 71495, 71579, 71661, 71738, 71812, 71880, 71943, 72001, 72052, 72097, 72135, 72164, 72186, 72199, 72204, 72201, 72190, 72172, 72146, 72114, 72076, 72031, 71980, 71924, 71863, 71797, 71727, 71652, 71573, 71491, 71405, 71316, 71223, 71127, 71029, 70928, 70825, 70719, 70612, 70502, 70391, 70278, 70165, 70049, 69933, 69816, 69698, 69579, 69459, 69338, 69217, 69094, 68972, 68848, 68724, 68599, 68474, 68349, 68223, 68097, 67971, 67844, 67718, 67591, 67464, 67337, 67210, 67084, 66957, 66831, 66705, 66579, 66454];
    this.speedData = [215, 217, 219, 221, 223, 225, 227, 229, 231, 233, 235, 237, 239, 242, 244, 246, 248, 250, 252, 255, 257, 259, 261, 264, 266, 268, 271, 273, 275, 278, 280, 283, 285, 288, 290, 293, 295, 298, 301, 303, 306, 308, 311, 313, 315, 318, 320, 322, 325, 327, 329, 331, 333, 336, 338, 340, 342, 344, 346, 347, 349, 351, 353, 355, 357, 359, 361, 362, 364, 366, 368, 370, 371, 373, 375, 377, 378, 380, 382, 384, 385, 387, 389, 391, 392, 394, 396, 398, 399, 401, 403, 404, 406, 408, 409, 411, 413, 415, 416, 418, 420, 421, 423, 425, 427, 428, 430, 432, 434, 436, 438, 440, 442, 444, 446, 448, 450, 452, 454, 456, 458, 460, 462, 464, 466, 468, 470, 472, 474, 476, 478, 480, 482, 485, 487, 489, 491, 493, 495, 498, 500, 502, 504, 507, 509, 511, 514, 516, 518, 521, 523, 525, 528, 530, 533, 535, 538, 540, 543, 545, 548, 551, 553, 556, 559, 562, 564, 567, 570, 573, 576, 579, 583, 586, 589, 592, 596, 599, 602, 606, 610, 613, 617, 621, 624, 628, 632, 636, 640, 644, 648, 652, 656, 660, 664, 668, 672, 676, 680, 685, 689, 693, 697, 701, 706, 710, 714, 719, 723, 728, 732, 737, 741, 746, 751, 756, 761, 766, 771, 776, 781, 786, 791, 796, 801, 807, 812, 817, 822, 828, 833, 839, 844, 849, 855, 860, 865, 871, 876, 881, 887, 892, 897, 902, 907, 912, 917, 922, 927, 932, 937, 942, 947, 952, 957, 962, 966, 971, 976, 981, 985, 990, 995, 999, 1004, 1009, 1013, 1018, 1022, 1027, 1031, 1036, 1040, 1045, 1049, 1053, 1058, 1062, 1066, 1071, 1075, 1079, 1083, 1087, 1092, 1096, 1100, 1104, 1108, 1112, 1116, 1120, 1124, 1128, 1132, 1136, 1140, 1144, 1148, 1151, 1155, 1159, 1163, 1167, 1170, 1174, 1178, 1181, 1185, 1189, 1192, 1196, 1199, 1203, 1207, 1210, 1214, 1217, 1221, 1224, 1227, 1231, 1234, 1238, 1241, 1244, 1248, 1251, 1254, 1258, 1261, 1264, 1267, 1271, 1274, 1277, 1280, 1283, 1286, 1289, 1293, 1296, 1299, 1302, 1305, 1308, 1311, 1314, 1317, 1320, 1323, 1326, 1329, 1332, 1335, 1338, 1341, 1343, 1346, 1349, 1352, 1355, 1357, 1360, 1363, 1366, 1368, 1371, 1373, 1376, 1379, 1381, 1384, 1386, 1389, 1392, 1394, 1397, 1399, 1402, 1404, 1407, 1409, 1412, 1414, 1417, 1419, 1422, 1424, 1426, 1429, 1431, 1434, 1436, 1438, 1441, 1443, 1445, 1448, 1450, 1452, 1455, 1457, 1459, 1462, 1464, 1466, 1468, 1471, 1473, 1475, 1477, 1480, 1482, 1484, 1486, 1488, 1491, 1493, 1495, 1497, 1499, 1501, 1504, 1506, 1508, 1510, 1512, 1514, 1516, 1518, 1520, 1523, 1525, 1527, 1529, 1531, 1533, 1535, 1537, 1539, 1541, 1543, 1545, 1547, 1549, 1551, 1553, 1555, 1557, 1559, 1561, 1563, 1565, 1567, 1569, 1571, 1573, 1575, 1577, 1578, 1580, 1582, 1584, 1586, 1588, 1590, 1592, 1594, 1596, 1597, 1599, 1601, 1603, 1605, 1607, 1609, 1610, 1612, 1614, 1616, 1618, 1620, 1621, 1623, 1625, 1627, 1629, 1631, 1632, 1634, 1636, 1638, 1639, 1641, 1643, 1645, 1647, 1648, 1650, 1652, 1654, 1655, 1657, 1659, 1661, 1663, 1664, 1666, 1668, 1670, 1672, 1673, 1675, 1677, 1679, 1681, 1683, 1685, 1687, 1688, 1690, 1692, 1695, 1697, 1699, 1701, 1703, 1705, 1707, 1710, 1712, 1714, 1717, 1719, 1721, 1724, 1726, 1729, 1731, 1733, 1736, 1738, 1741, 1743, 1746, 1748, 1750, 1753, 1755, 1758, 1760, 1763, 1765, 1768, 1771, 1773, 1776, 1778, 1781, 1783, 1786, 1789, 1791, 1794, 1796, 1799, 1802, 1804, 1807, 1809, 1812, 1814, 1817, 1819, 1822, 1824, 1827, 1829, 1832, 1834, 1837, 1839, 1842, 1845, 1848, 1851, 1854, 1857, 1860, 1864, 1867, 1871, 1875, 1880, 1884, 1889, 1895, 1901, 1907, 1913, 1920, 1928, 1936, 1944, 1953, 1962, 1971, 1980, 1990, 1999, 2009, 2019, 2029, 2039, 2049, 2059, 2069, 2079, 2088, 2098, 2108, 2118, 2127, 2137, 2147, 2157, 2167, 2177, 2187, 2197, 2207, 2218, 2228, 2239, 2249, 2260, 2271, 2282, 2293, 2303, 2314, 2325, 2336, 2347, 2358, 2369, 2380, 2390, 2401, 2412, 2424, 2435, 2446, 2458, 2469, 2481, 2493, 2506, 2518, 2531, 2545, 2558, 2572, 2586, 2600, 2615, 2629, 2644, 2659, 2674, 2690, 2705, 2721, 2736, 2752, 2767, 2783, 2799, 2815, 2831, 2847, 2864, 2880, 2897, 2914, 2931, 2948, 2966, 2984, 3002, 3020, 3039, 3058, 3078, 3097, 3117, 3137, 3158, 3178, 3199, 3220, 3241, 3262, 3284, 3305, 3327, 3348, 3370, 3392, 3414, 3436, 3458, 3480, 3502, 3525, 3547, 3570, 3593, 3615, 3638, 3661, 3685, 3708, 3731, 3755, 3779, 3803, 3827, 3852, 3877, 3902, 3928, 3953, 3980, 4007, 4034, 4061, 4089, 4118, 4147, 4176, 4205, 4235, 4266, 4297, 4328, 4359, 4391, 4423, 4456, 4489, 4522, 4555, 4589, 4623, 4658, 4692, 4727, 4762, 4797, 4832, 4867, 4902, 4938, 4973, 5009, 5044, 5080, 5116, 5153, 5190, 5228, 5266, 5305, 5346, 5387, 5429, 5472, 5516, 5562, 5609, 5657, 5706, 5755, 5805, 5853, 5901, 5948, 5993, 6036, 6077, 6115, 6150, 6181, 6209, 6233, 6252, 6268, 6280, 6289, 6294, 6297, 6296, 6293, 6287, 6279, 6269, 6257, 6243, 6228, 6211, 6194, 6174, 6154, 6134, 6112, 6089, 6067, 6043, 6020, 5996, 5972, 5948, 5925, 5901, 5879, 5856, 5834, 5812, 5790, 5769, 5748, 5727, 5707, 5686, 5666, 5645, 5625, 5605, 5584, 5564, 5544, 5523, 5503, 5482, 5462, 5442, 5421, 5401, 5380, 5360, 5340, 5320, 5299, 5279, 5259, 5239, 5219, 5199, 5179, 5160, 5140, 5121, 5101, 5082, 5063, 5044, 5025, 5006, 4988];

    // instant aims 

    this.pitchAim = 0;
    this.rolAim = 0;
    this.yawAim = 0;

    //Real values - the real values, adding the rate values to the real values
    this.pitchReal = 8;
    this.rollReal = 0;
    this.yawReal = 0;

    //rate values - update through the buttons I use these to calulate the positions of the rate arrows, and to calculate the offset I should I add to the real positions 
    this.pitchRate = 0;
    this.rollRate = 0;
    this.yawRate = 0;

    //how much the rates are incremented by when clicked
    //how much does 1% equate to?

    this.pitchRateT = 1/4;        // 0.25 degrees per second
    this.rollRateT = 1/2;           //0.5 degrees every second      //feels OK
    this.yawRateT = 1/4;

    //if I can get them to work independantly of each other would be sweet 

    //disturbances
    this.pitchDistrubance = 0;
    this.rollDisturbance = 0;
    this.yawDisturbance = 0;

    //this.skyRoll = 0;

    //ms counter
    this.msCount = 0;


}

pilotObject.prototype.load = function () {
    this.loadDisplay();
    this.loadButtons();
    this.loadRollData();
    //this.loadYawData();
}


//[1] update second 
pilotObject.prototype.secondUpdate = function(time) {
    this.currentTime = time;

}

//[2] update 20fps
pilotObject.prototype.fpsUpdate = function () {

    this.updateVariables();
    this.updateDisplay();
    this.updateDebug();

    this.msCount += 1;
    //if (this.msCount > 20) {
    //    this.msCount = 0;
    //}
}

pilotObject.prototype.updateVariables = function () {

    // we start with the value of the rates provided by the user clicking the buttons
    //updating:
    //  1. Real values of the ships pitch/yaw/roll
    //  2. Disturbances
    //  3. Ships aims for pitch/yaw/roll

    //[2] Disturbances

    this.pitchDistrubance = 0;      //degrees
    this.rollDisturbance = (25 * Math.sin(2 * Math.PI * (1 / 5000) * this.msCount)) + this.rollReal;           //degrees
    this.yawDisturbance = 0;        //degrees

    //[3] Calculate aims

    this.pitchAim = this.pitchData[this.currentTime];
    this.rollAim = 0;       
    this.yawAim = 0;     

    //[1] ships real values

    this.pitchReal += (this.pitchRate * this.pitchRateT) / 20;
    this.yawReal += (this.yawRate * this.yawRateT) / 20;
    this.rollReal += -(this.rollRate * this.rollRateT) / 20;        //needs to be amount
  

}

pilotObject.prototype.updateDisplay = function () {

    //use the updated variables to position the:
    //1. rate arrows
    //2. aim pointers
    //3. Sky SVG

    //[1] update rate arrows 

    var screenPosition = 46 - (this.pitchRate * 6.25);
    $(".pitch-arrow").css("top", screenPosition + "%");

    screenPosition = 44 + (this.yawRate * 6.25);
    $(".yaw-arrow").css("left", screenPosition + "%");

    screenPosition = 44.5 + (this.rollRate * 6.25);
    $(".roll-arrow").css("left", screenPosition + "%");

    //[2] update aim pointers

    var pitchPointer = 50 - ((this.pitchData[this.currentTime] - this.pitchReal) / 2);
    $(".pitch-pointer").css("top", pitchPointer + "%");


    //49 is center 
    //let +- 25 degrees be the max and minimum of the show
    // note: the value of the rollReal is in degrees and is the value of the current offset...
    var rollPointer = 49 - ((this.rollAim - this.rollDisturbance )*45)/25;             
    $(".roll-pointer").css("left", rollPointer + "%");

    //[3] update the position of the sky svg

    //roll 
    var skyPitch = ((this.pitchReal) / 2);                                // devide by two to transform to screen co-ordinates       
    $(".sky-SVG").css("top", skyPitch + "%");

    //pitch
    $(".sky-SVG").css({ 'transform': 'rotate(' + this.rollDisturbance + 'deg)' });

}



//debug
pilotObject.prototype.updateDebug = function () {

    //update all left hand debug values
    $(".speed-aim").html(Math.round((this.speedData[this.currentTime] / 343) * 100) / 100);
    $(".pitch-aim").html(Math.round(this.pitchData[this.currentTime]));
    $(".height-aim").html(Math.round(this.heightData[this.currentTime]));

    //update all right hand debug values
    $(".current-pitch").html(Math.round(this.pitchReal));
    $(".current-pitch-set").html(Math.round(this.pitchRate));
    $(".current-yaw").html(Math.round(this.yawReal));
    $(".current-roll").html(Math.round(this.rollReal));
    $(".current-roll-set").html(Math.round(this.rollDisturbance));
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

        this.rollRate += 1;
        console.log(this.rollRate);

    })

    rollLeftButton.on("click", () => {
        this.rollRate += -1;
        console.log(this.rollRate);

    })

    pitchUpButton.on("click", () => {
        this.pitchRate += 1;
    })

    pitchDownButton.on("click", () => {

        //update the pitch by 1 
        this.pitchRate += -1;

    })

    yawRightButton.on("click", () => {
        //right is positive
        this.yawRate += 1;

    })

    yawLeftButton.on("click", () => {
        this.yawRate += -1;
    })

}
pilotObject.prototype.loadRollData = function () {

    /*
    var freqIndex = getRandomInt(4);
    var offsetIndex = getRandomInt(4);

    var offset = [1, 2, 3, 4];
    var freq = []
    */


    console.log(getRandomInt(4));



}

//helper functions

function centerObject(objectWidth, containerWidth) {
    return (containerWidth - objectWidth) / 2;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default pilotObject;