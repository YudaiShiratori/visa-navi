// MDXのCommonJSモジュールをESMとして使用するためのヘルパー
import zwitchPkg from "zwitch";

// CommonJSモジュールからの名前付きエクスポートを取得
export const zwitch = zwitchPkg.zwitch || zwitchPkg.default || zwitchPkg;

// 他のMDX関連のCommonJSモジュールも同様に処理できます
