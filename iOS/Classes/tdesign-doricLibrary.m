#import "tdesign-doricLibrary.h"
#import "DoricDemoPlugin.h"

@implementation tdesign-doricLibrary
- (void)load:(DoricRegistry *)registry {
    NSString *path = [[NSBundle mainBundle] bundlePath];
    NSString *fullPath = [path stringByAppendingPathComponent:@"bundle_tdesign-doric.js"];
    NSString *jsContent = [NSString stringWithContentsOfFile:fullPath encoding:NSUTF8StringEncoding error:nil];
    [registry registerJSBundle:jsContent withName:@"tdesign-doric"];
    [registry registerNativePlugin:DoricDemoPlugin.class withName:@"demoPlugin"];
}
@end