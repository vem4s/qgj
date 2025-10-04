/** Registers specified imported (JS -> C#) interop instance and associates it with unique ID.
 *  @param instance Interop instance to resolve ID for.
 *  @return Unique identifier of the registered instance. */
export declare function registerInstance(instance: object): number;
/** Resolves registered imported (JS -> C#) interop instance from specified ID.
 *  @param id Unique identifier of the instance. */
export declare function getInstance(id: number): object;
/** Invoked from C# to notify that imported (JS -> C#) interop instance is no longer
 *  used (eg, was garbage collected) and can be released on JavaScript side as well.
 *  @param id Unique identifier of the disposed interop instance. */
export declare function disposeInstance(id: number): void;
/** Registers specified exported (C# -> JS) instance to invoke dispose on C# side
 *  when it's collected (finalized) by JavaScript runtime GC.
 *  @param instance Interop instance to register.
 *  @param id Unique identifier of the interop instance. */
export declare function disposeOnFinalize(instance: object, id: number): void;
