info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let babyDino: Sprite = null
let tourist: Sprite = null
scene.setBackgroundImage(assets.image`Freeway`)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveOnlyOnscreenWithArrows(mamaDino, controller.Speeds.Fast)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
mamaDino,
assets.animation`Mama Moving`,
100,
true
)
forever(function () {
    music.play(music.createSong(hex`0078000408020400001c00010a006400f40164000004000000000000000000000000000500000455000000040002202a04000800012a08000c00012a0c001000012a10001400012a14001800012918001c0001271c002000012a20002400012524002800012a28002c00011b30003400012c34003800012438003c00012c02001c000c960064006d019001000478002c010000640032000000000a060005560000000400020d1804000800011808000c0001180c001000011810001400011814001800011418001c0001121c00200001182000240002121824002800011828002c00010830003400011834003800011138003c00011806001c00010a006400f40164000004000000000000000000000000000000000207003c00400002242c08001c000e050046006603320000040a002d000000640014000132000201000207003c004000020f18`), music.PlaybackMode.UntilDone)
})
forever(function () {
    tourist = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    tourist.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    tourist,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2100)
})
forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    babyDino.y = randint(15, 115)
    animation.runImageAnimation(
    babyDino,
    assets.animation`Animated Baby`,
    100,
    true
    )
    pause(1000)
})
