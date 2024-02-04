
    const HandleClick = () => {
        const [shimmering, setShimmering] = useState(false);
      // Trigger the shimmer effect
      setShimmering(true);
  
      // Perform any other actions you want on button click
  
      // Simulate a delay (you can remove this in your actual code)
      setTimeout(() => {
        // Reset the shimmer effect after a delay
        setShimmering(false);
      }, 1000);
    };
export default HandleClick;
