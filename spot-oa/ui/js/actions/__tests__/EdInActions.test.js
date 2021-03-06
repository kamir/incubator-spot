jest.mock('../../dispatchers/SpotDispatcher');
jest.mock('../SpotActions');
jest.mock('../../utils/SpotUtils');

const SpotDispatcher = require('../../dispatchers/SpotDispatcher');
const SpotActions = require('../SpotActions');
const SpotConstants = require('../../constants/SpotConstants');
const SpotUtils = require('../../utils/SpotUtils');

const EdInActions = require('../EdInActions');

test('setFilter', () => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.setFilter('foo');

    expect(SpotUtils.setUrlParam).toHaveBeenCalled();
    expect(SpotUtils.setUrlParam.mock.calls[0][0]).toBe('filter');
    expect(SpotUtils.setUrlParam.mock.calls[0][1]).toBe('foo');

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.UPDATE_FILTER);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].filter).toBe('foo');
});

test('reloadSuspicious', () => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.reloadSuspicious();

    expect(SpotActions.toggleMode).toHaveBeenCalled();
    expect(SpotActions.toggleMode.mock.calls[0][0]).toBe(SpotConstants.DETAILS_PANEL);
    expect(SpotActions.toggleMode.mock.calls[0][1]).toBe(SpotConstants.DETAILS_MODE);

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.RELOAD_SUSPICIOUS);
});

test('reloadDetails', () => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.reloadDetails();

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.RELOAD_DETAILS);
});

test('reloadVisualDetails', () => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.reloadVisualDetails();

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.RELOAD_DETAILS_VISUAL);
});

test('highlightThreat',() => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.highlightThreat('anId');

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.HIGHLIGHT_THREAT);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].threat).toBe('anId');
});

test('unhighlightThreat', () => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.unhighlightThreat();

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.UNHIGHLIGHT_THREAT);
});

test('selectThreat', () => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.selectThreat('anId');

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.SELECT_THREAT);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].threat).toBe('anId');
});

test('selectIp', () => {
    SpotDispatcher.dispatch.mockClear();

    EdInActions.selectIp('anIp');

    expect(SpotDispatcher.dispatch).toHaveBeenCalled();
    expect(SpotDispatcher.dispatch.mock.calls[0][0]).toBeInstanceOf(Object);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].actionType).toBe(SpotConstants.SELECT_IP);
    expect(SpotDispatcher.dispatch.mock.calls[0][0].ip).toBe('anIp');
});
