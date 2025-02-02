export class AbilityDto {

    /** 等級
     * LV
     */
    private _level: number;
    /** 血量
     * HP
     */
    private _health: number;
    /** 魔力
    * MP
    */
    private _magic: number;
    /** 行動值
    * AP
    */
    private _actionPoint: number;
    /** 攻擊力(基礎傷害)
    * STR
    */
    private _strength: number;
    /** 智力
    * Inte
    */
    private _intelligence: number;
    /** 命中
    * ACC
    */
    private _accuracy: number;
    /** 幸運
    * LUK
    */
    private _luck: number;
    /** 靈巧,迴避
    * AGI
    */
    private _agility: number;
    /** 物理攻擊
    * ATK
    */
    private _attack: number;
    /** 魔法傷害
    * MATK
    */
    private _mattack: number;

    /** 等級
      * LV
      */
    get level() {
        return this._level;
    }
    /** 血量
     * HP
     */
    get health() {
        return this._health;
    }
    /** 魔力
    * MP
    */
    get magic() {
        return this._magic;
    }
    /** 行動值
    * AP
    */
    get actionPoint() {
        return this._actionPoint;
    }
    /** 攻擊力(基礎傷害)
    * STR
    */
    get strength() {
        return this._strength;
    }
    /** 智力
    * Inte
    */
    get intelligence() {
        return this._intelligence;
    }
    /** 命中
    * ACC
    */
    get accuracy() {
        return this._accuracy;
    }
    /** 幸運
    * LUK
    */
    get luck() {
        return this._luck;
    }
    /** 靈巧,迴避
    * AGI
    */
    get agility() {
        return this._agility;
    }
    /** 物理攻擊
    * ATK
    */
    get attack() {
        return this._attack;
    }
    /** 魔法傷害
    * MATK
    */
    get mattack() {
        return this._mattack;
    }



    /** 等級
     * LV
     */
    set level(_level: number) {
        this._level = _level;
    }
    /** 血量
     * HP
     */
    set health(_health: number) {
        this._health = _health;
    }
    /** 魔力
    * MP
    */
    set magic(_magic: number) {
        this._magic = _magic;
    }
    /** 行動值
    * AP
    */
    set actionPoint(_actionPoint: number) {
        this._actionPoint = _actionPoint;
    }
    /** 攻擊力(基礎傷害)
    * STR
    */
    set strength(_strength: number) {
        this._strength = _strength;
    }
    /** 智力
    * Inte
    */
    set intelligence(_intelligence: number) {
        this._intelligence = _intelligence;
    }
    /** 命中
    * ACC
    */
    set accuracy(_accuracy: number) {
        this._accuracy = _accuracy;
    }
    /** 幸運
    * LUK
    */
    set luck(_luck: number) {
        this._luck = _luck;
    }
    /** 靈巧,迴避
    * AGI
    */
    set agility(_agility: number) {
        this._agility = _agility;
    }
    /** 物理攻擊
    * ATK
    */
    set attack(_attack: number) {
        this._attack = _attack;
    }
    /** 魔法傷害
    * MATK
    */
    set mattack(_mattack: number) {
        this._mattack = _mattack;
    }
}