/**
 *
 * Asynchronously loads the component for Board
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
