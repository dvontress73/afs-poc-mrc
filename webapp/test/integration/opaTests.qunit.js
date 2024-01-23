sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tw/mrcpoc/test/integration/FirstJourney',
		'tw/mrcpoc/test/integration/pages/MRCList',
		'tw/mrcpoc/test/integration/pages/MRCObjectPage',
		'tw/mrcpoc/test/integration/pages/MRCBuildObjectPage'
    ],
    function(JourneyRunner, opaJourney, MRCList, MRCObjectPage, MRCBuildObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tw/mrcpoc') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMRCList: MRCList,
					onTheMRCObjectPage: MRCObjectPage,
					onTheMRCBuildObjectPage: MRCBuildObjectPage
                }
            },
            opaJourney.run
        );
    }
);