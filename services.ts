import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class AppUtilityService {
  constructor() {}

  /**
   * A parent event handler to handle all the childrens events
   * using JavaScript's `Event Delegation` concept.
   *
   * @public
   * @param {Event} event The event to invoke.
   * @param {Array} groupArray The array of objects to traverse.
   * @param {string} targetEl The target element, to which Id is specified.
   * @returns {*} Returns the result of selected item object.
   */
  public eventDelegationHandler = async (
    event: Event,
    groupArray: Array<any>,
    targetEl: string
  ): Promise<any> => {
    let node: any = event.target;
    targetEl = targetEl.toUpperCase();
    try {
      // first let's check if we clicked on target element by going up the DOM tree
      while (node.nodeName !== targetEl) {
        node = node.parentNode;
      }
    } catch (err) {
      throw new Error(`Could not find target element ${targetEl}.`);
    }
    // once we found targetElement of event to propogate
    if (node.nodeName == targetEl) {
      const targetElementId = node.id;
      if (!targetElementId) {
        throw new Error(
          `Could not find 'id' attribute of target element ${targetEl}.`
        );
      }
      const selectedItem = await _.filter(groupArray, item => {
        return item.Id == targetElementId;
      })[0];
      return selectedItem;
    }
  };
}
