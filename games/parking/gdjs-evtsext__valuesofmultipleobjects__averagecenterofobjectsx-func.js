
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX = {};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachIndex2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachObjects2 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachTemporary2 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachTotalCount2 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects3= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects4= [];

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.conditionTrue_0 = {val:false};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects2, gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects3);

{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalX").add((( gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects3[0].getCenterXInScene()));
}{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted").add(1);
}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted").setNumber(0);
}{runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalX").setNumber(0);
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects1);

for(gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachIndex2 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachIndex2 < gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects1.length;++gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachIndex2) {
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects2.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachTemporary2 = gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects1[gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachIndex2];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects2.push(gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.forEachTemporary2);
if (true) {

{ //Subevents: 
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{



}


{


gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")) == 0;
}if (gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = 0; }}}

}


{



}


{


gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")) != 0;
}if (gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("SubtotalX")) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__ValuesOfObjects").getChild("ObjectsCounted")); }}}

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.func = function(runtimeScene, Object, parentEventsFunctionContext) {
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

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects3.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.GDObjectObjects4.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageCenterOfObjectsX.registeredGdjsCallbacks = [];