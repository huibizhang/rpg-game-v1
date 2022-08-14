import { occupation } from "interfaces/occupation";

export class Warrior implements occupation {

    /**
     * 職業名稱
     */
    public readonly occupationName: string = '戰士';
    /**
    * 能力值
    */
    public ability() {
        throw new Error("Method not implemented.");
    }
    /**
     * 技能
     * @param params 場景
     * @returns 技能名稱
     */
    public skills(params: any): string {
        params.anims.create({
            key: "warriorSkill",
            frames: params.anims.generateFrameNumbers("warrior", { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1,
        });
        params.warrior.anims.play('warriorSkill', true);

        return '吃我棒棒槌!';
    }

    /**
     * 死翹翹
     * @param params 場景
     */
    public dead(params: any): void {

        params.anims.create({
            key: "warriorDead",
            frames: params.anims.generateFrameNumbers("warrior", { start: 5, end: 9 }),
            frameRate: 10,
            repeat: -1,
        });
        params.warrior.anims.play('warriorDead', true);
    }

    /**
     * 走路
     * @param params 場景
     * @param direction 方向
     */
    walk(params: any, direction: string): void {

        if (direction === 'left') {
            params.warrior.flipX = true;
            params.anims.create({
                key: "warriorWalk",
                frames: params.anims.generateFrameNumbers("warrior", { start: 11, end: 16 }),
                frameRate: 10,
                repeat: -1,
            });
            params.warrior.x -= 2
        } else {
            params.warrior.flipX = false;
            params.anims.create({
                key: "warriorWalk",
                frames: params.anims.generateFrameNumbers("warrior", { start: 11, end: 16 }),
                frameRate: 10,
                repeat: -1,
            });
            params.warrior.x += 2
        }

        params.warrior.anims.play('warriorWalk', true);
    }
}

