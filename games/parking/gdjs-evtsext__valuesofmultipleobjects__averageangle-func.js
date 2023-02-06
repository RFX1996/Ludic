
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle = {};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachIndex2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachObjects2 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachTemporary2 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachTotalCount2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects4= [];

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.conditionTrue_0 = {val:false};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3);


gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[i].getAngle() > 180 ) {
        gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[k] = gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3.length = k;}if (gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalAngle").add((( gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[0].getAngle()) - 360);
}}

}


{

gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3);


gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[i].getAngle() <= 180 ) {
        gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = true;
        gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[k] = gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3.length = k;}if (gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3 */
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalAngle").add((( gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3[0].getAngle()));
}}

}


{


{
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted").add(1);
}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalAngle").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects1);

for(gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachIndex2 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachIndex2 < gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects1.length;++gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachIndex2) {
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects2.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachTemporary2 = gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects1[gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachIndex2];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects2.push(gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")) == 0;
}if (gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


{



}


{


gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")) != 0;
}if (gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalAngle")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")); }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects3.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.GDObjectObjects4.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageAngle.registeredGdjsCallbacks = [];