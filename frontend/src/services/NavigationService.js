import {NavigationActions} from 'react-navigation';

export default class NavigationService
{
    static _navigator;

    static setTopLevelNavigator(navigatorRef)
    {
        _navigator = navigatorRef;
    }

    static navigate(routeName, params)
    {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            }),
        );
    }
}
