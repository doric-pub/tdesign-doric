package pub.doric.android;

import android.app.Application;

import pub.doric.Doric;
import pub.doric.library.DoricTDesignLibrary;

public class MainApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        Doric.init(this);
        Doric.registerLibrary(new DoricTDesignLibrary());
    }
}
