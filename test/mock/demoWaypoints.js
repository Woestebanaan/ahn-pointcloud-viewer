'use strict';

angular.module('mockedRail', [])
  .value('demoWaypointsJSON', [
    [90274.02636518252, 421299.04945495195, 376.9782864063846, 90270.47872293722, 421291.3830463037, 371.62661256193707],
    [90253.44317377398, 420919.94281499897, 305.93322530133264, 90249.9909752715, 420912.9470069886, 299.67694879037776],
    [90156.34424722982, 420312.1086286968, 221.92962606140824, 90152.26291787428, 420304.7125258207, 216.5779522169607]
  ])
  .value('defaultDrivemapWaypointsJSON', [
    [93938.72485075414, 436669.46845370205, 150, 93938.72485075414, 436669.46845370205, 150],
    [93938.72485075414, 436669.46845370205, 150, 93938.72485075414, 436669.46845370205, 150]
  ]);
