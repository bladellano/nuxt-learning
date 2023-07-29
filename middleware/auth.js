export default ({redirect}) => {

  const logged = false;

  if(!logged){
    return redirect('/');
  }
  // console.log('> context', context)
  // console.log('> AUTH MIDDLEWARE - ALL ROUTES')
}
